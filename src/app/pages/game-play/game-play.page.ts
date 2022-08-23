
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as confetti from 'canvas-confetti';
export type Options = confetti.Options;
import { ActivatedRoute, Router } from '@angular/router';
import { maleNames, femaleNames } from './names';
import { UserInfoService } from 'src/app/services/user-info.service';
import { IonModal } from '@ionic/angular';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { Animation, AnimationController } from '@ionic/angular';
import { cards } from './game/Cards';
@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.page.html',
  styleUrls: ['./game-play.page.scss'],

})
export class GamePlayPage implements OnInit {
  @ViewChild(IonModal) leavModal: IonModal;
  ///firewrks related
  @Input() interval = 4000;
  @Input() options: Options;
  @Input() useWorker: boolean;
  confettis: (options?: confetti.Options) => Promise<null>;

  resultInfoShow: boolean;
  turnGameFinished: boolean;
  visible: boolean;
  canvasId: string;
  canvas: HTMLCanvasElement;
  stopped = true;

  showallCards: boolean;
  passedNumber;
  playerNum: number;
  usersAvatar: any = [];
  userNo = [];
  players = ['', '', '', ''];
  myName;
  myAvatar;
  gameLevel;
  cardsInDeck = [];
  scores = [];
  scoreOverflow=[];
  showSpeech=[];
  standShow=[];
  earnedGameScoreAtTurn=[];
  turnmessage;

  currentTurn;
  userWinAtTurn;
  dealerTurn; ////who is dealer at this game
  pickedCards;
  oneShowingCards: Array<number>;
  passed: Array<Boolean>;
  turnArray;
  userAnimationPlaying: boolean;
  animationStart=[
    {
      'width': '17vw',
      'height': '23vw',
      'transform': 'rotate(0deg)',
      'margin-top': '62vw',
      'margin-left': '24vw'
    },
    {
      'width': '17vw',
      'height': '23vw',
      'transform': 'rotate(-90deg)',
      'margin-top': '60vw',
      'margin-left': '62vw',
    },
    {
      'width': '17vw',
      'height': '23vw',
      'transform': 'rotate(0deg)',
      'margin-top': '22vw',
      'margin-left': '57vw'
    },
    {
      'width': '17vw',
      'height': '23vw',
      'transform': 'rotate(-90deg)',
      'margin-top': '29vw',
      'margin-left': '21vw',
    }];
  animationTarget=[
    {
      'margin-left': '30vw',
      'margin-top': '110vw',
      'width': '15vw',
      'height': '22vw',
      'transform': 'rotate(0deg)',
    },
    {
      'margin-left': '96vw',
      'margin-top': '45vw',
      width: '10vw',
      height: '16vw',
      transform: 'rotate(90deg)',
    },{
      'margin-left': '52vw',
      'margin-top': '-7vw',
      width: '10vw',
      height: '16vw',
      transform: 'rotate(0deg)',
    },{
      'margin-left': '-6vw',
      'margin-top': '29vw',
      width: '10vw',
      height: '16vw',
      transform: 'rotate(-90deg)',
    }];

  difficulty=[20,19,17];
  constructor(private nativeAudio: NativeAudio,
    private route: ActivatedRoute,
    private router: Router,
    private elementRef: ElementRef,
    private userInfo: UserInfoService,
    private animationCtrl: AnimationController) { };
  ngOnInit()
  {
    this.initGame();
  }

  ionViewWillLeave()
  {
  }
  ////check piece can move
  playersInit()
  {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.playerNum = JSON.parse(params.special).playerNum;
        this.gameLevel = JSON.parse(params.special).gameLevel;
      }
      this.myName = this.userInfo.getUserName();
      this.myAvatar = this.userInfo.getUserAvatar();
      this.players[0] = this.myName;
      this.usersAvatar[0] = this.myAvatar;

      for (let i = 1; i < this.playerNum; i++) {
        if (i % 2 === 1) {
          this.players[i] = maleNames[Math.floor(Math.random() * maleNames.length)];
          this.usersAvatar[i] = Math.floor(Math.random() * 93) * 2;
        } else {
          this.players[i] = femaleNames[Math.floor(Math.random() * femaleNames.length)];
          this.usersAvatar[i] = Math.floor(Math.random() * 93) * 2 + 1;
        }
      }
      this.scores = Array(this.playerNum).fill(0);
      this.dealerTurn=0;
    });
  }
  initGame()
  {
    ////////////////
    this.playersInit();
    this.startGame();
    return;
  }
  startGame()
  {
    this.pickedCards = [];
    this.cardsInDeck = [...cards];
    this.cardsInDeck.sort(() => 0.5 - Math.random());
    this.oneShowingCards = Array(this.playerNum).fill(null);
    this.scoreOverflow=Array(this.playerNum).fill(false);
    this.dealerTurn = (this.dealerTurn+1)%this.playerNum;
    this.currentTurn = this.dealerTurn;
    this.passed = Array(this.playerNum).fill(false);
    this.pickedCards = [[], [], [], []];
    this.passedNumber = 0;
    this.resultInfoShow=false;
    this.turnGameFinished=false;
    this.showallCards=false;
    this.showSpeech=Array(this.playerNum).fill(false);
    this.standShow=Array(this.playerNum).fill(false);
    this.userWinAtTurn=false;
    this.earnedGameScoreAtTurn=Array(this.playerNum).fill(-1);
    setTimeout(() => this.firstShowingSpread(), 500);


  }

  computerPlay()
  {
    switch (this.currentTurn) {
      case 1:
        if (this.getTotalValues(1) < this.difficulty[this.gameLevel]) {
            this.pickCard(1);
        }
        else {
          this.passed[this.currentTurn] = true;
          this.passedIncrease();
        }
        return;
      case 2:
        if (this.getTotalValues(2) < this.difficulty[this.gameLevel]) {
          this.pickCard(2);
        }
        else {
          this.passed[this.currentTurn] = true;
          this.passedIncrease();
        }
        return;
      case 3:
        if (this.getTotalValues(3) < this.difficulty[this.gameLevel]) {
          this.pickCard(3);
        }
        else {
          this.passed[this.currentTurn] = true;
          this.passedIncrease();
        }
        return;
    }
  }
  async pickCard(player)
  {
    if(player===0)
    {
      this.userAnimationPlaying=true;
    }else{
      this.showSpeech[player]=true;
      await new Promise((resove)=>{
        setTimeout(resove,1000);
      });
      this.showSpeech[player]=false;
    }
    document.getElementById('cardbackImg').style.setProperty('display','block');
    const userAnimation = this.animationCtrl.create()
      .addElement(document.querySelector('.cardbackImg'))
      .duration(500)
      .keyframes([
        {
          offset:0,
          width:this.animationStart[this.dealerTurn].width,
          height:this.animationStart[this.dealerTurn].height,
          transform:this.animationStart[this.dealerTurn].transform,
          marginTop:this.animationStart[this.dealerTurn]['margin-top'],
          marginLeft:this.animationStart[this.dealerTurn]['margin-left'],
        },
        {
          offset:1,
          width:this.animationTarget[player].width,
          height:this.animationTarget[player].height,
          transform:this.animationTarget[player].transform,
          marginTop:this.animationTarget[player]['margin-top'],
          marginLeft:this.animationTarget[player]['margin-left'],
        }
      ]);
    userAnimation.play();
    await new Promise((resolveInner) => {
          setTimeout(resolveInner, 500);
    });
    this.userAnimationPlaying=false;
    document.getElementById('cardbackImg').style.setProperty('display','none');
    // (document.getElementsByClassName('.cardbackImg')[0] as HTMLElement).style.opacity='0';
    this.pickedCards[player].push(this.cardsInDeck.pop());
    if (player !== 0) {
      this.computerPlay();
    } else {
      if (this.getTotalValues(0) > 21) {
        this.passed[0] = true;
        this.passedIncrease();
      }
    }
  }
  getTotalValues(playerTurn)
  {
    let aces = [];
    let total = 0;
    [...this.pickedCards[playerTurn], this.oneShowingCards[playerTurn]].map((item) => {
      if (item.name === 'ace')
        aces.push(item);
      else
        total += item.value;
    });
    this.mostSuit = total;
    this.temptotal = total;
    if (aces.length > 0)
      this.recurForTotal(aces.length, 0);
    return this.mostSuit;
  }
  temptotal;
  mostSuit;
  recurForTotal(size, index)
  {
    if (index < size - 1) {
      this.temptotal += 1;
      this.recurForTotal(size, index + 1);
      this.temptotal += 10;
      this.recurForTotal(size, index + 1);
      this.temptotal -= 11;
    } {
      if (this.mostSuit === 21)
        return;
      this.temptotal += 1;
      if (this.temptotal === 21) {
        this.mostSuit = 21;
        this.temptotal -= 1;
        return;
      }

      ////+1 > 21
      if (this.temptotal > 21) {
        if (this.mostSuit === -1)
          this.mostSuit = this.temptotal;
        else
          this.mostSuit = this.mostSuit < this.temptotal ? this.mostSuit : this.temptotal;

        this.temptotal -= 1;
        return;
      }
      this.mostSuit = this.mostSuit > this.temptotal ? this.mostSuit : this.temptotal;

      ////+1<21
      ////+11
      this.temptotal += 10;
      if (this.temptotal === 21) {
        this.mostSuit = 21;
        this.temptotal -= 11;
        return;
      }

      ////+11 > 21
      if (this.temptotal > 21) {
        if (this.mostSuit === -1)
          this.mostSuit = this.temptotal;
        else
          this.mostSuit = this.mostSuit < this.temptotal ? this.mostSuit : this.temptotal;

        this.temptotal -= 11;
        return;
      }
      this.mostSuit = this.mostSuit > this.temptotal ? this.mostSuit : this.temptotal;
      this.temptotal -= 11;
      return;
    }
  }

  evaluateGameStatus()
  {
  }
  firstShowingSpread()
  {
    for (let i = 0; i < this.playerNum; i++) {
      this.oneShowingCards[i] = this.cardsInDeck.pop();
    }
    setTimeout(() => this.nextTurn(), 700);
  }
  nextTurn()
  {
    this.currentTurn = (this.currentTurn + 1) % this.playerNum;
    if (this.passed[this.currentTurn] === true) {
      return;
    }
    console.log(this.currentTurn);
    if (this.currentTurn === 0) {////in the case of user
      console.log('here');
    } else {
      this.computerPlay();
    }
  }
  ////////user action
  askCard()
  {
    this.pickCard(0);
  }
  noAsk()
  {
    this.passed[0] = true;
    this.passedIncrease();
  }
  leaveTable()
  {
    this.leavModal.dismiss();
    this.router.navigate(['/main']);
  }
  continueGame()
  {
    this.startGame();
  }
  leaveModalShow()
  {
    this.leavModal.present();
  }
  getArrayByN(n)
  {
    return Array(n).fill(0);
  }

  ////this method used when game finished
  async  estimate(){
    let atThisGameScore = Array(this.playerNum).fill(0);
    let turnWinner=-1;
    console.log('------------------0');
    for (let i = 0; i < this.playerNum; i++) {
      atThisGameScore[i] = this.getTotalValues(i);
    }
    console.log(atThisGameScore);
    atThisGameScore.sort((a, b) => a-b);
    console.log(atThisGameScore);
    if (atThisGameScore[0] > 21) {
      this.earnedGameScoreAtTurn=Array(this.playerNum).fill(-5);
      const updatedScore=this.scores.map((score)=>score-5);
      this.scores=updatedScore;
      this.userWinAtTurn=false;
      turnWinner=-1;
    }else{
      let maxPoint=-1;
      for(let i=0;i<this.playerNum;i++){
        const temp=this.getTotalValues(i);
        if(temp<=21 && temp>maxPoint)
        {
          maxPoint=temp;
        }
      }

      for(let i=0;i<this.playerNum;i++){
        if(this.getTotalValues((this.dealerTurn+1+i)%this.playerNum)===maxPoint){
          turnWinner=(this.dealerTurn+1+i)%this.playerNum;
          break;
        }
      }

      for(let i=0;i<this.playerNum;i++){
        if(i===turnWinner){
          if(this.getTotalValues(i)===21){
            this.scores[i]+=20;this.earnedGameScoreAtTurn[i]=20;
          }else{
            this.scores[i]+=5;this.earnedGameScoreAtTurn[i]=5;
          }
        }else{
          if(this.getTotalValues(i)>21)
          {
            this.scores[i]-=5;this.earnedGameScoreAtTurn[i]=-5;
          }else{
            this.scores[i]-=1;this.earnedGameScoreAtTurn[i]=-1;
          }
        }
      }
    }

    await new Promise((resolver)=>{
      setTimeout(resolver,2000);
    });
    if(turnWinner===0){
     this.userWin();
    }else{
      this.userLose();
    }
    console.log("---------:" + turnWinner);
  }

  ////used when each player turn finished
  async passedIncrease()
  {

    if(this.currentTurn!==0 && this.getTotalValues(this.currentTurn)<=21){
      this.standShow[this.currentTurn]=true;
      await new Promise((resolve)=>{
        setTimeout(resolve,2000);
      });
      this.standShow[this.currentTurn]=false;
    }

    this.passedNumber++;
    if(this.getTotalValues(this.currentTurn)>21){
      this.scoreOverflow[this.currentTurn]=true;
      console.log( this.scoreOverflow);
    }


    if (this.passedNumber === this.playerNum) {
      this.showallCards=true;
      this.estimate();
    }
    this.nextTurn();
  }


  /////confetti related
  setItemVisibility({ target, visible }: { target: Element; visible: boolean }): void {
    this.visible = visible;
    if (visible) {
      this.canvas = this.elementRef.nativeElement.querySelector(`#${this.canvasId}`) as HTMLCanvasElement;
      if (!this.canvas) {
        return;
      }
      this.confettis = confetti.create(this.canvas, {
        resize: true,
        useWorker: this.useWorker
      });
    }
  }


    ///play win or lose animation
  userWin() {
    setTimeout(() => {
      this.resultInfoShow=true;
      setTimeout(()=>this.playAnimation(),100);
      setTimeout(()=>{
        this.confettis(this.options);
        setTimeout(()=>{this.resultInfoShow=false;this.turnGameFinished=true;},3000);
      },500);
    }, 500);
  }
  userLose(){
    setTimeout(() => {
      this.resultInfoShow=true;
      setTimeout(()=>this.playAnimation(),10);
      setTimeout(()=>{this.resultInfoShow=false;this.turnGameFinished=true;},3000);
    }, 500);
  }



  playAnimation(){
    const userAnimation = this.animationCtrl.create()
      .addElement(document.querySelector('.youWin'))
      .duration(500)
      .fromTo('transform','scale(0.5)','scale(1)');
    userAnimation.play();
  }
}
