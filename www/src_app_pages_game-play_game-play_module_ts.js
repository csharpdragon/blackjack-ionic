"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_game-play_game-play_module_ts"],{

/***/ 9481:
/*!*************************************************************!*\
  !*** ./src/app/pages/game-play/game-play-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePlayPageRoutingModule": () => (/* binding */ GamePlayPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _game_play_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-play.page */ 7457);




const routes = [
    {
        path: '',
        component: _game_play_page__WEBPACK_IMPORTED_MODULE_0__.GamePlayPage
    }
];
let GamePlayPageRoutingModule = class GamePlayPageRoutingModule {
};
GamePlayPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GamePlayPageRoutingModule);



/***/ }),

/***/ 1201:
/*!*****************************************************!*\
  !*** ./src/app/pages/game-play/game-play.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePlayPageModule": () => (/* binding */ GamePlayPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _game_play_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-play-routing.module */ 9481);
/* harmony import */ var ng_in_viewport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-in-viewport */ 108);
/* harmony import */ var _game_play_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-play.page */ 7457);









// import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
let GamePlayPageModule = class GamePlayPageModule {
};
GamePlayPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _game_play_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamePlayPageRoutingModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule,
            ng_in_viewport__WEBPACK_IMPORTED_MODULE_8__.InViewportModule,
            // NativeAudio
        ],
        declarations: [_game_play_page__WEBPACK_IMPORTED_MODULE_1__.GamePlayPage]
    })
], GamePlayPageModule);



/***/ }),

/***/ 7457:
/*!***************************************************!*\
  !*** ./src/app/pages/game-play/game-play.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePlayPage": () => (/* binding */ GamePlayPage)
/* harmony export */ });
/* harmony import */ var D_Mine_task_projects_audio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _game_play_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-play.page.html?ngResource */ 3730);
/* harmony import */ var _game_play_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-play.page.scss?ngResource */ 3603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! canvas-confetti */ 7020);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./names */ 7793);
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-info.service */ 5360);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/native-audio/ngx */ 4843);
/* harmony import */ var _game_Cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/Cards */ 3689);













let GamePlayPage = class GamePlayPage {
  constructor(nativeAudio, route, router, elementRef, userInfo, animationCtrl) {
    this.nativeAudio = nativeAudio;
    this.route = route;
    this.router = router;
    this.elementRef = elementRef;
    this.userInfo = userInfo;
    this.animationCtrl = animationCtrl; ///firewrks related

    this.interval = 4000;
    this.stopped = true;
    this.usersAvatar = [];
    this.userNo = [];
    this.players = ['', '', '', ''];
    this.cardsInDeck = [];
    this.scores = [];
    this.scoreOverflow = [];
    this.showSpeech = [];
    this.standShow = [];
    this.earnedGameScoreAtTurn = [];
    this.animationStart = [{
      'width': '17vw',
      'height': '23vw',
      'transform': 'rotate(0deg)',
      'margin-top': '62vw',
      'margin-left': '24vw'
    }, {
      'width': '17vw',
      'height': '23vw',
      'transform': 'rotate(-90deg)',
      'margin-top': '60vw',
      'margin-left': '62vw'
    }, {
      'width': '17vw',
      'height': '23vw',
      'transform': 'rotate(0deg)',
      'margin-top': '22vw',
      'margin-left': '57vw'
    }, {
      'width': '17vw',
      'height': '23vw',
      'transform': 'rotate(-90deg)',
      'margin-top': '29vw',
      'margin-left': '21vw'
    }];
    this.animationTarget = [{
      'margin-left': '30vw',
      'margin-top': '110vw',
      'width': '15vw',
      'height': '22vw',
      'transform': 'rotate(0deg)'
    }, {
      'margin-left': '96vw',
      'margin-top': '45vw',
      width: '10vw',
      height: '16vw',
      transform: 'rotate(90deg)'
    }, {
      'margin-left': '52vw',
      'margin-top': '-7vw',
      width: '10vw',
      height: '16vw',
      transform: 'rotate(0deg)'
    }, {
      'margin-left': '-6vw',
      'margin-top': '29vw',
      width: '10vw',
      height: '16vw',
      transform: 'rotate(-90deg)'
    }];
    this.difficulty = [20, 19, 17];
  }

  ngOnInit() {
    this.initGame();
  }

  ionViewWillLeave() {} ////check piece can move


  playersInit() {
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
          this.players[i] = _names__WEBPACK_IMPORTED_MODULE_4__.maleNames[Math.floor(Math.random() * _names__WEBPACK_IMPORTED_MODULE_4__.maleNames.length)];
          this.usersAvatar[i] = Math.floor(Math.random() * 93) * 2;
        } else {
          this.players[i] = _names__WEBPACK_IMPORTED_MODULE_4__.femaleNames[Math.floor(Math.random() * _names__WEBPACK_IMPORTED_MODULE_4__.femaleNames.length)];
          this.usersAvatar[i] = Math.floor(Math.random() * 93) * 2 + 1;
        }
      }

      this.scores = Array(this.playerNum).fill(0);
      this.dealerTurn = 0;
    });
  }

  initGame() {
    ////////////////
    this.playersInit();
    this.startGame();
    return;
  }

  startGame() {
    this.pickedCards = [];
    this.cardsInDeck = [..._game_Cards__WEBPACK_IMPORTED_MODULE_7__.cards];
    this.cardsInDeck.sort(() => 0.5 - Math.random());
    this.oneShowingCards = Array(this.playerNum).fill(null);
    this.scoreOverflow = Array(this.playerNum).fill(false);
    this.dealerTurn = (this.dealerTurn + 1) % this.playerNum;
    this.currentTurn = this.dealerTurn;
    this.passed = Array(this.playerNum).fill(false);
    this.pickedCards = [[], [], [], []];
    this.passedNumber = 0;
    this.resultInfoShow = false;
    this.turnGameFinished = false;
    this.showallCards = false;
    this.showSpeech = Array(this.playerNum).fill(false);
    this.standShow = Array(this.playerNum).fill(false);
    this.userWinAtTurn = false;
    this.earnedGameScoreAtTurn = Array(this.playerNum).fill(-1);
    setTimeout(() => this.firstShowingSpread(), 500);
  }

  computerPlay() {
    switch (this.currentTurn) {
      case 1:
        if (this.getTotalValues(1) < this.difficulty[this.gameLevel]) {
          this.pickCard(1);
        } else {
          this.passed[this.currentTurn] = true;
          this.passedIncrease();
        }

        return;

      case 2:
        if (this.getTotalValues(2) < this.difficulty[this.gameLevel]) {
          this.pickCard(2);
        } else {
          this.passed[this.currentTurn] = true;
          this.passedIncrease();
        }

        return;

      case 3:
        if (this.getTotalValues(3) < this.difficulty[this.gameLevel]) {
          this.pickCard(3);
        } else {
          this.passed[this.currentTurn] = true;
          this.passedIncrease();
        }

        return;
    }
  }

  pickCard(player) {
    var _this = this;

    return (0,D_Mine_task_projects_audio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (player === 0) {
        _this.userAnimationPlaying = true;
      } else {
        _this.showSpeech[player] = true;
        yield new Promise(resove => {
          setTimeout(resove, 1000);
        });
        _this.showSpeech[player] = false;
      }

      document.getElementById('cardbackImg').style.setProperty('display', 'block');

      const userAnimation = _this.animationCtrl.create().addElement(document.querySelector('.cardbackImg')).duration(500).keyframes([{
        offset: 0,
        width: _this.animationStart[_this.dealerTurn].width,
        height: _this.animationStart[_this.dealerTurn].height,
        transform: _this.animationStart[_this.dealerTurn].transform,
        marginTop: _this.animationStart[_this.dealerTurn]['margin-top'],
        marginLeft: _this.animationStart[_this.dealerTurn]['margin-left']
      }, {
        offset: 1,
        width: _this.animationTarget[player].width,
        height: _this.animationTarget[player].height,
        transform: _this.animationTarget[player].transform,
        marginTop: _this.animationTarget[player]['margin-top'],
        marginLeft: _this.animationTarget[player]['margin-left']
      }]);

      userAnimation.play();
      yield new Promise(resolveInner => {
        setTimeout(resolveInner, 500);
      });
      _this.userAnimationPlaying = false;
      document.getElementById('cardbackImg').style.setProperty('display', 'none'); // (document.getElementsByClassName('.cardbackImg')[0] as HTMLElement).style.opacity='0';

      _this.pickedCards[player].push(_this.cardsInDeck.pop());

      if (player !== 0) {
        _this.computerPlay();
      } else {
        if (_this.getTotalValues(0) > 21) {
          _this.passed[0] = true;

          _this.passedIncrease();
        }
      }
    })();
  }

  getTotalValues(playerTurn) {
    let aces = [];
    let total = 0;
    [...this.pickedCards[playerTurn], this.oneShowingCards[playerTurn]].map(item => {
      if (item.name === 'ace') aces.push(item);else total += item.value;
    });
    this.mostSuit = total;
    this.temptotal = total;
    if (aces.length > 0) this.recurForTotal(aces.length, 0);
    return this.mostSuit;
  }

  recurForTotal(size, index) {
    if (index < size - 1) {
      this.temptotal += 1;
      this.recurForTotal(size, index + 1);
      this.temptotal += 10;
      this.recurForTotal(size, index + 1);
      this.temptotal -= 11;
    }

    {
      if (this.mostSuit === 21) return;
      this.temptotal += 1;

      if (this.temptotal === 21) {
        this.mostSuit = 21;
        this.temptotal -= 1;
        return;
      } ////+1 > 21


      if (this.temptotal > 21) {
        if (this.mostSuit === -1) this.mostSuit = this.temptotal;else this.mostSuit = this.mostSuit < this.temptotal ? this.mostSuit : this.temptotal;
        this.temptotal -= 1;
        return;
      }

      this.mostSuit = this.mostSuit > this.temptotal ? this.mostSuit : this.temptotal; ////+1<21
      ////+11

      this.temptotal += 10;

      if (this.temptotal === 21) {
        this.mostSuit = 21;
        this.temptotal -= 11;
        return;
      } ////+11 > 21


      if (this.temptotal > 21) {
        if (this.mostSuit === -1) this.mostSuit = this.temptotal;else this.mostSuit = this.mostSuit < this.temptotal ? this.mostSuit : this.temptotal;
        this.temptotal -= 11;
        return;
      }

      this.mostSuit = this.mostSuit > this.temptotal ? this.mostSuit : this.temptotal;
      this.temptotal -= 11;
      return;
    }
  }

  evaluateGameStatus() {}

  firstShowingSpread() {
    for (let i = 0; i < this.playerNum; i++) {
      this.oneShowingCards[i] = this.cardsInDeck.pop();
    }

    setTimeout(() => this.nextTurn(), 700);
  }

  nextTurn() {
    this.currentTurn = (this.currentTurn + 1) % this.playerNum;

    if (this.passed[this.currentTurn] === true) {
      return;
    }

    console.log(this.currentTurn);

    if (this.currentTurn === 0) {
      ////in the case of user
      console.log('here');
    } else {
      this.computerPlay();
    } // if(this.passed[this.currentTurn])
    // {
    //   alert('finished');
    // }

  } ////////user action


  askCard() {
    this.pickCard(0);
  }

  noAsk() {
    this.passed[0] = true;
    this.passedIncrease();
  }

  leaveTable() {
    this.leavModal.dismiss();
    this.router.navigate(['/main']);
  }

  continueGame() {
    this.startGame();
  }

  leaveModalShow() {
    this.leavModal.present();
  }

  getArrayByN(n) {
    return Array(n).fill(0);
  }

  estimate() {
    var _this2 = this;

    return (0,D_Mine_task_projects_audio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let atThisGameScore = Array(_this2.playerNum).fill(0);
      let turnWinner = -1;
      console.log('------------------0');

      for (let i = 0; i < _this2.playerNum; i++) {
        atThisGameScore[i] = _this2.getTotalValues(i);
      }

      console.log(atThisGameScore);
      atThisGameScore.sort((a, b) => a - b);
      console.log(atThisGameScore);

      if (atThisGameScore[0] > 21) {
        _this2.earnedGameScoreAtTurn = Array(_this2.playerNum).fill(-1);

        const updatedScore = _this2.scores.map(score => score - 1);

        _this2.scores = updatedScore;
        _this2.userWinAtTurn = false;
        turnWinner = -1;
      } else {
        let maxPoint = -1;

        for (let i = 0; i < _this2.playerNum; i++) {
          const temp = _this2.getTotalValues(i);

          if (temp <= 21 && temp > maxPoint) {
            maxPoint = temp;
          }
        }

        for (let i = 0; i < _this2.playerNum; i++) {
          if (_this2.getTotalValues((_this2.dealerTurn + 1 + i) % _this2.playerNum) === maxPoint) {
            turnWinner = (_this2.dealerTurn + 1 + i) % _this2.playerNum;
            break;
          }
        }

        for (let i = 0; i < _this2.playerNum; i++) {
          if (i === turnWinner) {
            if (_this2.getTotalValues(i) === 21) {
              _this2.scores[i] += 20;
              _this2.earnedGameScoreAtTurn[i] = 20;
            } else {
              _this2.scores[i] += 5;
              _this2.earnedGameScoreAtTurn[i] = 5;
            }
          } else {
            if (_this2.getTotalValues(i) > 21) {
              _this2.scores[i] -= 5;
              _this2.earnedGameScoreAtTurn[i] = -5;
            } else {
              _this2.scores[i] -= 1;
              _this2.earnedGameScoreAtTurn[i] = -1;
            }
          }
        }
      }

      yield new Promise(resolver => {
        setTimeout(resolver, 2000);
      });

      if (turnWinner === 0) {
        _this2.userWin();
      } else {
        _this2.userLose();
      }

      console.log("---------:" + turnWinner);
    })();
  }

  passedIncrease() {
    var _this3 = this;

    return (0,D_Mine_task_projects_audio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.currentTurn !== 0 && _this3.getTotalValues(_this3.currentTurn) <= 21) {
        _this3.standShow[_this3.currentTurn] = true;
        yield new Promise(resolve => {
          setTimeout(resolve, 2000);
        });
        _this3.standShow[_this3.currentTurn] = false;
      }

      _this3.passedNumber++;

      if (_this3.getTotalValues(_this3.currentTurn) > 21) {
        _this3.scoreOverflow[_this3.currentTurn] = true;
        console.log(_this3.scoreOverflow);
      }

      if (_this3.passedNumber === _this3.playerNum) {
        _this3.showallCards = true;

        _this3.estimate();
      }

      _this3.nextTurn();
    })();
  }

  setItemVisibility({
    target,
    visible
  }) {
    this.visible = visible;

    if (visible) {
      this.canvas = this.elementRef.nativeElement.querySelector(`#${this.canvasId}`);

      if (!this.canvas) {
        return;
      }

      this.confettis = canvas_confetti__WEBPACK_IMPORTED_MODULE_3__.create(this.canvas, {
        resize: true,
        useWorker: this.useWorker
      });
    }
  }

  userWin() {
    setTimeout(() => {
      this.resultInfoShow = true;
      setTimeout(() => this.playAnimation(), 100);
      setTimeout(() => {
        this.confettis(this.options);
        setTimeout(() => {
          this.resultInfoShow = false;
          this.turnGameFinished = true;
        }, 3000);
      }, 500);
    }, 500);
  }

  userLose() {
    setTimeout(() => {
      this.resultInfoShow = true;
      setTimeout(() => this.playAnimation(), 10);
      setTimeout(() => {
        this.resultInfoShow = false;
        this.turnGameFinished = true;
      }, 3000);
    }, 500);
  }

  playAnimation() {
    const userAnimation = this.animationCtrl.create().addElement(document.querySelector('.youWin')).duration(500).fromTo('transform', 'scale(0.5)', 'scale(1)');
    userAnimation.play();
  }

};

GamePlayPage.ctorParameters = () => [{
  type: _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_6__.NativeAudio
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef
}, {
  type: src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_5__.UserInfoService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AnimationController
}];

GamePlayPage.propDecorators = {
  leavModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonModal]
  }],
  interval: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  useWorker: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }]
};
GamePlayPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-game-play',
  template: _game_play_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_game_play_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], GamePlayPage);


/***/ }),

/***/ 3689:
/*!***********************************************!*\
  !*** ./src/app/pages/game-play/game/Cards.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cards": () => (/* binding */ cards)
/* harmony export */ });
const cards = [
    {
        "suit": "clubs",
        "name": "2",
        "src": "carta_2b.png",
        "value": 2
    },
    {
        "suit": "clubs",
        "name": "3",
        "src": "carta_3b.png",
        "value": 3
    },
    {
        "suit": "clubs",
        "name": "4",
        "src": "carta_4b.png",
        "value": 4
    },
    {
        "suit": "clubs",
        "name": "5",
        "src": "carta_5b.png",
        "value": 5
    },
    {
        "suit": "clubs",
        "name": "6",
        "src": "carta_6b.png",
        "value": 6
    },
    {
        "suit": "clubs",
        "name": "7",
        "src": "carta_7b.png",
        "value": 7
    },
    {
        "suit": "clubs",
        "name": "8",
        "src": "carta_8b.png",
        "value": 8
    },
    {
        "suit": "clubs",
        "name": "9",
        "src": "carta_9b.png",
        "value": 9
    },
    {
        "suit": "clubs",
        "name": "10",
        "src": "carta_10b.png",
        "value": 10
    },
    {
        "suit": "clubs",
        "name": "ace",
        "src": "carta_1b.png",
        "value": 11
    },
    {
        "suit": "clubs",
        "name": "jack",
        "src": "carta_11b.png",
        "value": 10
    },
    {
        "suit": "clubs",
        "name": "king",
        "src": "carta_13b.png",
        "value": 10
    },
    {
        "suit": "clubs",
        "name": "queen",
        "src": "carta_12b.png",
        "value": 10
    },
    {
        "suit": "diamonds",
        "name": "2",
        "src": "carta_2c.png",
        "value": 2
    },
    {
        "suit": "diamonds",
        "name": "3",
        "src": "carta_3c.png",
        "value": 3
    },
    {
        "suit": "diamonds",
        "name": "4",
        "src": "carta_4c.png",
        "value": 4
    },
    {
        "suit": "diamonds",
        "name": "5",
        "src": "carta_5c.png",
        "value": 5
    },
    {
        "suit": "diamonds",
        "name": "6",
        "src": "carta_6c.png",
        "value": 6
    },
    {
        "suit": "diamonds",
        "name": "7",
        "src": "carta_7c.png",
        "value": 7
    },
    {
        "suit": "diamonds",
        "name": "8",
        "src": "carta_8c.png",
        "value": 8
    },
    {
        "suit": "diamonds",
        "name": "9",
        "src": "carta_9c.png",
        "value": 9
    },
    {
        "suit": "diamonds",
        "name": "10",
        "src": "carta_10c.png",
        "value": 10
    },
    {
        "suit": "diamonds",
        "name": "ace",
        "src": "carta_1c.png",
        "value": 11
    },
    {
        "suit": "diamonds",
        "name": "jack",
        "src": "carta_11c.png",
        "value": 10
    },
    {
        "suit": "diamonds",
        "name": "king",
        "src": "carta_13c.png",
        "value": 10
    },
    {
        "suit": "diamonds",
        "name": "queen",
        "src": "carta_12c.png",
        "value": 10
    },
    {
        "suit": "hearts",
        "name": "2",
        "src": "carta_2o.png",
        "value": 2
    },
    {
        "suit": "hearts",
        "name": "3",
        "src": "carta_3o.png",
        "value": 3
    },
    {
        "suit": "hearts",
        "name": "4",
        "src": "carta_4o.png",
        "value": 4
    },
    {
        "suit": "hearts",
        "name": "5",
        "src": "carta_5o.png",
        "value": 5
    },
    {
        "suit": "hearts",
        "name": "6",
        "src": "carta_6o.png",
        "value": 6
    },
    {
        "suit": "hearts",
        "name": "7",
        "src": "carta_7o.png",
        "value": 7
    },
    {
        "suit": "hearts",
        "name": "8",
        "src": "carta_8o.png",
        "value": 8
    },
    {
        "suit": "hearts",
        "name": "9",
        "src": "carta_9o.png",
        "value": 9
    },
    {
        "suit": "hearts",
        "name": "10",
        "src": "carta_10o.png",
        "value": 10
    },
    {
        "suit": "hearts",
        "name": "ace",
        "src": "carta_1o.png",
        "value": 11
    },
    {
        "suit": "hearts",
        "name": "jack",
        "src": "carta_11o.png",
        "value": 10
    },
    {
        "suit": "hearts",
        "name": "king",
        "src": "carta_13o.png",
        "value": 10
    },
    {
        "suit": "hearts",
        "name": "queen",
        "src": "carta_12o.png",
        "value": 10
    },
    {
        "suit": "spades",
        "name": "2",
        "src": "carta_2e.png",
        "value": 2
    },
    {
        "suit": "spades",
        "name": "3",
        "src": "carta_3e.png",
        "value": 3
    },
    {
        "suit": "spades",
        "name": "4",
        "src": "carta_4e.png",
        "value": 4
    },
    {
        "suit": "spades",
        "name": "5",
        "src": "carta_5e.png",
        "value": 5
    },
    {
        "suit": "spades",
        "name": "6",
        "src": "carta_6e.png",
        "value": 6
    },
    {
        "suit": "spades",
        "name": "7",
        "src": "carta_7e.png",
        "value": 7
    },
    {
        "suit": "spades",
        "name": "8",
        "src": "carta_8e.png",
        "value": 8
    },
    {
        "suit": "spades",
        "name": "9",
        "src": "carta_9e.png",
        "value": 9
    },
    {
        "suit": "spades",
        "name": "10",
        "src": "carta_10e.png",
        "value": 10
    },
    {
        "suit": "spades",
        "name": "ace",
        "src": "carta_1e.png",
        "value": 11
    },
    {
        "suit": "spades",
        "name": "jack",
        "src": "carta_11e.png",
        "value": 10
    },
    {
        "suit": "spades",
        "name": "king",
        "src": "carta_13e.png",
        "value": 10
    },
    {
        "suit": "spades",
        "name": "queen",
        "src": "carta_12e.png",
        "value": 10
    }
];


/***/ }),

/***/ 7793:
/*!******************************************!*\
  !*** ./src/app/pages/game-play/names.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "femaleNames": () => (/* binding */ femaleNames),
/* harmony export */   "maleNames": () => (/* binding */ maleNames)
/* harmony export */ });
const maleNames = [
    'beast',
    'man',
    'cry man',
    'pushy',
    'hairy'
];
const femaleNames = [
    'cuty',
    'baby',
    'white',
    'yellow',
    'pretty'
];


/***/ }),

/***/ 3603:
/*!****************************************************************!*\
  !*** ./src/app/pages/game-play/game-play.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "/* latin */\n@font-face {\n  font-family: \"Chewy\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Chewy Regular\"), local(\"Chewy-Regular\"), url('uK_94ruUb-k-wn52KjI.woff2') format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin */\n@font-face {\n  font-family: \"Fredoka One\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Fredoka One\"), local(\"FredokaOne-Regular\"), url('k3kUo8kEI-tA1RRcTZGmTlHGCac.woff2') format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Rubik\"), local(\"Rubik-Regular\"), url('iJWKBXyIfDnIV7nFrXyi0A.woff2') format(\"woff2\");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* hebrew */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Rubik\"), local(\"Rubik-Regular\"), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nDrXyi0A.woff2) format(\"woff2\");\n  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Rubik\"), local(\"Rubik-Regular\"), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nPrXyi0A.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Rubik\"), local(\"Rubik-Regular\"), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nBrXw.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Rubik Medium\"), local(\"Rubik-Medium\"), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7EyjmmZ8WDm7Q.woff2) format(\"woff2\");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* hebrew */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Rubik Medium\"), local(\"Rubik-Medium\"), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Eyjmmf8WDm7Q.woff2) format(\"woff2\");\n  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Rubik Medium\"), local(\"Rubik-Medium\"), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7EyjmmT8WDm7Q.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Rubik Medium\"), local(\"Rubik-Medium\"), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Eyjmmd8WA.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Rubik Bold\"), local(\"Rubik-Bold\"), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmZ8WDm7Q.woff2) format(\"woff2\");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* hebrew */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Rubik Bold\"), local(\"Rubik-Bold\"), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmf8WDm7Q.woff2) format(\"woff2\");\n  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Rubik Bold\"), local(\"Rubik-Bold\"), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmT8WDm7Q.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Rubik Bold\"), local(\"Rubik-Bold\"), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmd8WA.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* hebrew */\n@font-face {\n  font-family: \"Varela Round\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Varela Round Regular\"), local(\"VarelaRound-Regular\"), url(https://fonts.gstatic.com/s/varelaround/v12/w8gdH283Tvk__Lua32TysjIfpcuPP9g.woff2) format(\"woff2\");\n  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* vietnamese */\n@font-face {\n  font-family: \"Varela Round\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Varela Round Regular\"), local(\"VarelaRound-Regular\"), url(https://fonts.gstatic.com/s/varelaround/v12/w8gdH283Tvk__Lua32TysjIfqMuPP9g.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Varela Round\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Varela Round Regular\"), local(\"VarelaRound-Regular\"), url(https://fonts.gstatic.com/s/varelaround/v12/w8gdH283Tvk__Lua32TysjIfqcuPP9g.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Varela Round\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Varela Round Regular\"), local(\"VarelaRound-Regular\"), url(https://fonts.gstatic.com/s/varelaround/v12/w8gdH283Tvk__Lua32TysjIfp8uP.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Chango\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Chango Regular\"), local(\"Chango-Regular\"), url('2V0cKI0OB5U7WaJCxne5blYKArHM.woff2') format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Chango\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Chango Regular\"), local(\"Chango-Regular\"), url(https://fonts.gstatic.com/s/chango/v8/2V0cKI0OB5U7WaJCyHe5blYKAg.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"BRLNSD\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('BRLNSD.ttf');\n}\n@font-face {\n  font-family: \"BRLNSDB\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('BRLNSDB.ttf');\n}\n@font-face {\n  font-family: \"Comix\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('Comix.ttf');\n}\n@font-face {\n  font-family: \"MAIAN\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('MAIAN.ttf');\n}\n@font-face {\n  font-family: \"MAIANB\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('MAIANB.ttf');\n}\n@font-face {\n  font-family: \"rifnum\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('rifnum.ttf');\n}\n@keyframes example {\n  from {\n    border: 5px solid red;\n  }\n  to {\n    border: 5px solid yellow;\n  }\n}\ncanvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 3;\n}\n.contain1 {\n  color: white;\n  padding-top: 80%;\n  width: 100%;\n  height: 100%;\n  z-index: 4;\n  position: absolute;\n}\n.contain1 .board {\n  width: 96%;\n  margin-top: 2%;\n  margin-left: 2%;\n  height: 70%;\n  color: white;\n}\n.contain1 .board .btnContainer {\n  width: 100%;\n  z-index: 20;\n  display: inline-flex;\n}\n.contain1 .board .btnContainer .leaveBtn,\n.contain1 .board .btnContainer .restartBtn {\n  text-align: center;\n  padding-top: 0.5vh;\n  font-size: 4vh;\n  margin: auto;\n  width: 35%;\n  background: url('boton_rojo_rect.png');\n  background-size: 100% 100%;\n  height: 6vh;\n  margin-top: 20%;\n  font-family: \"BRLNSDB\";\n  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8);\n}\n.contain1 .board .btnContainer .leaveBtn:active,\n.contain1 .board .btnContainer .restartBtn:active {\n  background: url('boton_rojo_rect_press.png');\n  background-size: 100% 100%;\n}\n.contain {\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  color: white;\n}\n.contain .greenBoard {\n  width: 96%;\n  color: white;\n  margin-top: 2%;\n  margin-left: 2%;\n  background: #13a12d;\n  height: 70%;\n  border-radius: 10px;\n  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.7);\n}\n.contain .greenBoard .finishTitle {\n  font-family: \"BRLNSDB\";\n  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8);\n  text-align: center;\n  padding: 3vh;\n  font-size: 5vh;\n}\n.contain .greenBoard cdk-virtual-scroll-viewport {\n  background: url('mosaico.png') center center;\n  width: 80%;\n  margin: auto;\n  margin-top: 2%;\n  padding-top: 2%;\n  height: 55%;\n}\n.contain .greenBoard cdk-virtual-scroll-viewport .items {\n  height: 8vh;\n  width: 100%;\n  border: 1px solid black;\n  display: inline-flex;\n}\n.contain .greenBoard cdk-virtual-scroll-viewport .items .rankNo {\n  width: 20%;\n  text-align: center;\n  font-size: 3vh;\n  color: red;\n  margin-top: 5%;\n}\n.contain .greenBoard cdk-virtual-scroll-viewport .items .item {\n  height: 100%;\n  width: 8vh;\n  background-size: 100% 100%;\n}\n.contain .greenBoard cdk-virtual-scroll-viewport .items .itemName {\n  width: 50%;\n  text-align: center;\n  font-size: 3vh;\n  color: black;\n  margin-top: 5%;\n}\n.contain .greenBoard cdk-virtual-scroll-viewport .items .itemscore {\n  width: 10%;\n  text-align: center;\n  font-size: 3vh;\n  color: black;\n  margin-top: 5%;\n}\nion-toolbar {\n  --background: linear-gradient(180deg, #05796d, #059f8f, #03776c);\n  --min-height: 50px !important;\n  --ion-font-family: \"MAIANB\";\n  border: 1px solid black;\n}\n.logo {\n  text-align: center;\n  width: 100%;\n  margin-left: 2%;\n  display: inline-flex;\n}\n.logo img {\n  margin: auto;\n  max-height: 8vh;\n}\n.logo .ludo {\n  margin-top: 1vh;\n  margin-bottom: 5px;\n  font-size: 5vh;\n  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8);\n  text-align: left;\n  color: #f0fbcf;\n  font-family: \"MAIANB\";\n  -webkit-text-decoration-color: black;\n          text-decoration-color: black;\n  font-weight: 400;\n  width: 80%;\n  padding-left: 4%;\n}\n.logo .closeBtn {\n  background-image: url('boton_cerrar.png');\n  background-size: 100% 100%;\n  margin-top: 3%;\n  margin-right: 4%;\n  width: 10%;\n  height: 5vh;\n}\n.logo .closeBtn:active {\n  background-image: url('boton_cerrar_press.png');\n  background-size: 100% 100%;\n}\nion-content {\n  --ion-font-family: \"BRLNSDB\";\n  --overflow: hidden;\n}\n.tcontainer {\n  color: white;\n  padding-top: 7%;\n  width: 100%;\n  height: 100%;\n  background: url('madero.png');\n  background-size: 100% 50%;\n}\n.tcontainer .playingBoard {\n  width: 96%;\n  margin: auto;\n  margin-top: -2%;\n  height: calc(130vw - 5px);\n  background-color: #00a800;\n  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.7);\n}\n.tcontainer .players .player {\n  position: absolute;\n  width: 15vw;\n  background-color: #027b6f;\n  border-radius: 3vw;\n}\n.tcontainer .players .player1 {\n  margin-top: 60vw;\n  margin-left: -2vw;\n}\n.tcontainer .players .player2 {\n  margin-top: -5vw;\n  margin-left: 30vw;\n}\n.tcontainer .players .player3 {\n  margin-left: 85vw;\n  margin-top: 30%;\n}\n.tcontainer .userRelative {\n  width: 100%;\n  height: 100%;\n  display: inline-flex;\n}\n.tcontainer .userRelative .userButtons {\n  width: 65%;\n  height: 100%;\n  margin-top: 2%;\n  text-align: center;\n  font-size: 9vw;\n  display: inline-flex;\n}\n.tcontainer .userRelative .userButtons .yesBtn {\n  width: 47%;\n  margin-left: 2%;\n  height: 15vw;\n  padding-top: 2vw;\n  background-image: url('boton_verde_rect.png');\n  background-size: 100% 100%;\n}\n.tcontainer .userRelative .userButtons .yesBtn:active {\n  background-image: url('boton_verde_rect_press.png');\n}\n.tcontainer .userRelative .userButtons .noBtn {\n  width: 47%;\n  margin-left: 2%;\n  padding-top: 2vw;\n  height: 15vw;\n  background-image: url('boton_rojo_rect.png');\n  background-size: 100% 100%;\n}\n.tcontainer .userRelative .userButtons .noBtn:active {\n  background-image: url('boton_rojo_rect_press.png');\n}\n.tcontainer .userRelative .userPlayer {\n  width: 30%;\n  height: 13%;\n  margin-top: 2%;\n  background-color: #dbdbb8;\n  border-radius: 2vw;\n  color: black;\n  display: inline-flex;\n}\n.tcontainer .userRelative .userPlayer .turnLetter {\n  width: 33%;\n  text-align: center;\n  padding-top: 20%;\n}\n.tcontainer .userRelative .userPlayer .turnPlayerInfo {\n  height: 70%;\n  width: 65%;\n}\n.tcontainer .userRelative .userPlayer .turnPlayerInfo .turnAvatar {\n  height: 100%;\n  margin-left: 20%;\n}\n.tcontainer .userRelative .userPlayer .turnPlayerInfo .turnName {\n  text-align: center;\n}\n.tcontainer .player1Cards .showingCards {\n  position: absolute;\n  margin-left: 3vw;\n  margin-top: 32vw;\n  width: 10vw;\n  height: 16vw;\n}\n.tcontainer .player1Cards .showingCards .card {\n  position: absolute;\n  width: 100%;\n  width: 10vw;\n  height: 16vw;\n  transform: rotate(-90deg);\n}\n.tcontainer .player1Cards .hiddenCards {\n  position: absolute;\n  margin-left: -8vw;\n  margin-top: 32vw;\n  width: 10vw;\n  height: 16vw;\n}\n.tcontainer .player1Cards .hiddenCards .card {\n  position: absolute;\n  width: 10vw;\n  height: 16vw;\n  transform: rotate(-90deg);\n}\n.tcontainer .player1Cards .oneShowCard img {\n  position: absolute;\n  width: 15vw;\n  height: 20vw;\n  transform: rotate(-90deg);\n  margin-top: 40vw;\n  margin-left: 23vw;\n}\n.tcontainer .player1Cards .oneShowCard .redOverlay1 {\n  position: absolute;\n  width: 15vw;\n  height: 20vw;\n  transform: rotate(-90deg);\n  margin-top: 40vw;\n  margin-left: 23vw;\n}\n.tcontainer .player1Cards .cardPack img {\n  position: absolute;\n  width: 17vw;\n  height: 23vw;\n  transform: rotate(-90deg);\n  margin-top: 22vw;\n  margin-left: 21vw;\n}\n.tcontainer .player2Cards .showingCards {\n  position: absolute;\n  margin-left: 56vw;\n  width: 10vw;\n  height: 20vw;\n  display: flex;\n  flex-direction: row;\n}\n.tcontainer .player2Cards .showingCards .card {\n  position: absolute;\n  height: 16vw;\n  width: 10vw;\n  margin-top: -6vw;\n}\n.tcontainer .player2Cards .showingCards img {\n  margin-top: 0px;\n}\n.tcontainer .player2Cards .hiddenCards {\n  position: absolute;\n  margin-left: 56vw;\n  width: 10vw;\n  height: 20vw;\n  display: flex;\n  flex-direction: row;\n}\n.tcontainer .player2Cards .hiddenCards .card {\n  position: absolute;\n  height: 16vw;\n  width: 10vw;\n  margin-top: -12vw;\n}\n.tcontainer .player2Cards .hiddenCards img {\n  margin-top: 0px;\n}\n.tcontainer .player2Cards .oneShowCard img {\n  position: absolute;\n  width: 15vw;\n  height: 20vw;\n  margin-top: 20vw;\n  margin-left: 41vw;\n}\n.tcontainer .player2Cards .oneShowCard .redOverlay1 {\n  position: absolute;\n  width: 15vw;\n  height: 20vw;\n  margin-top: 20vw;\n  margin-left: 41vw;\n}\n.tcontainer .player2Cards .cardPack img {\n  position: absolute;\n  width: 17vw;\n  height: 23vw;\n  margin-top: 18vw;\n  margin-left: 57vw;\n}\n.tcontainer .player3Cards .showingCards {\n  position: absolute;\n  margin-left: 87vw;\n  margin-top: 53vw;\n  width: 10vw;\n  height: 16vw;\n}\n.tcontainer .player3Cards .showingCards .card {\n  width: 10vw;\n  height: 16vw;\n  position: absolute;\n  width: 100%;\n  transform: rotate(90deg);\n}\n.tcontainer .player3Cards .hiddenCards {\n  position: absolute;\n  margin-left: 94vw;\n  margin-top: 53vw;\n  width: 10vw;\n  height: 16vw;\n}\n.tcontainer .player3Cards .hiddenCards .card {\n  position: absolute;\n  width: 100%;\n  transform: rotate(90deg);\n}\n.tcontainer .player3Cards .oneShowCard img {\n  position: absolute;\n  width: 15vw;\n  height: 20vw;\n  transform: rotate(90deg);\n  margin-top: 40vw;\n  margin-left: 60vw;\n}\n.tcontainer .player3Cards .oneShowCard .redOverlay1 {\n  position: absolute;\n  width: 15vw;\n  height: 20vw;\n  transform: rotate(90deg);\n  margin-top: 40vw;\n  margin-left: 60vw;\n}\n.tcontainer .player3Cards .cardPack img {\n  position: absolute;\n  width: 17vw;\n  height: 23vw;\n  transform: rotate(90deg);\n  margin-top: 56vw;\n  margin-left: 60vw;\n}\n.tcontainer .userCards .showingCards {\n  position: absolute;\n  margin-left: 35vw;\n  width: 18vw;\n  height: 24vw;\n  margin-top: 100vw;\n  display: flex;\n  flex-direction: row;\n}\n.tcontainer .userCards .showingCards .card {\n  position: absolute;\n  height: 28vw;\n  width: 18vw;\n}\n.tcontainer .userCards .oneShowCard img {\n  position: absolute;\n  width: 15vw;\n  height: 20vw;\n  margin-top: 60vw;\n  margin-left: 41vw;\n}\n.tcontainer .userCards .oneShowCard .redOverlay1 {\n  position: absolute;\n  width: 15vw;\n  height: 20vw;\n  margin-top: 60vw;\n  margin-left: 41vw;\n}\n.tcontainer .userCards .cardPack img {\n  position: absolute;\n  width: 17vw;\n  height: 23vw;\n  margin-top: 58vw;\n  margin-left: 24vw;\n}\n.youWin {\n  color: white;\n  position: absolute;\n  width: 65vw;\n  z-index: 5;\n  height: 34vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  left: 17.5vw;\n  top: 30vw;\n}\n.youWin .youWinText {\n  width: 100%;\n  height: 17 vw;\n  background-image: -webkit-linear-gradient(#b79425, #cda82f, #f8e9b7);\n  font-family: \"BRLNSDB\";\n  font-style: italic;\n  font-size: 15vw;\n  background-size: 100%;\n  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.8));\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}\n.youWin .textBack {\n  border-radius: 4vw;\n  position: absolute;\n  width: 100%;\n  margin-top: -12vw;\n  height: 17vw;\n  z-index: -1;\n  background-color: rgba(14, 137, 14, 0.8);\n}\n.youWin .youWinInfo {\n  margin-top: 1vw;\n  width: 70%;\n  margin-left: 15%;\n  height: 12 vw;\n  border-radius: 5vw;\n  background-color: rgba(14, 137, 14, 0.8);\n  font-family: \"BRLNSDB\";\n  font-size: 8vw;\n  display: flex;\n  flex-direction: row;\n  padding-top: 1vw;\n  padding-bottom: 1vw;\n  display: flex;\n  justify-content: center;\n}\n.youWin .youWinInfo img {\n  width: 8vw;\n}\nion-modal {\n  --ion-font-family: \"BRLNSDB\";\n  --border: 2px solid black;\n  --width: 90%;\n  --height: 60%;\n  --border-radius: 1vh;\n  --background: #027d71;\n}\nion-modal .contain {\n  width: 100%;\n  color: white;\n}\nion-modal .contain .finishTitle {\n  font-family: \"BRLNSDB\";\n  text-align: center;\n  padding: 3vh;\n  font-size: 4vh;\n  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8);\n}\nion-modal .contain .leaveBtn {\n  text-align: center;\n  padding-top: 1vh;\n  font-size: 4vh;\n  margin: auto;\n  width: 40%;\n  background: url('boton_rojo_rect.png');\n  background-size: 100% 100%;\n  height: 8vh;\n  margin-top: 10%;\n  font-family: \"BRLNSDB\";\n  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8);\n}\nion-modal .contain .leaveBtn:active {\n  background: url('boton_rojo_rect_press.png');\n  background-size: 100% 100%;\n}\nion-modal .contain cdk-virtual-scroll-viewport {\n  background: url('mosaico.png') center center;\n  width: 80%;\n  margin: auto;\n  margin-top: 2%;\n  padding-top: 2%;\n  height: 55%;\n  font-family: \"BRLNSDB\";\n}\nion-modal .contain cdk-virtual-scroll-viewport .items {\n  height: 8vh;\n  width: 100%;\n  border: 1px solid black;\n  display: inline-flex;\n}\nion-modal .contain cdk-virtual-scroll-viewport .items .rankNo {\n  width: 20%;\n  text-align: center;\n  font-size: 3vh;\n  color: red;\n  margin-top: 5%;\n}\nion-modal .contain cdk-virtual-scroll-viewport .items .item {\n  height: 100%;\n  width: 8vh;\n  background-size: 100% 100%;\n}\nion-modal .contain cdk-virtual-scroll-viewport .items .itemName {\n  width: 50%;\n  text-align: center;\n  font-size: 3vh;\n  color: black;\n  margin-top: 5%;\n}\nion-modal .contain cdk-virtual-scroll-viewport .items .itemscore {\n  width: 10%;\n  text-align: center;\n  font-size: 3vh;\n  color: black;\n  margin-top: 5%;\n}\n.borderStroke {\n  border: 1px solid black;\n}\n.playingBoard1 {\n  width: 100%;\n  height: 100%;\n}\n.cardbackImg {\n  position: absolute;\n  z-index: 10;\n  display: none;\n}\n.redOverlay, .redOverlay1 {\n  background-color: rgba(255, 0, 0, 0.4);\n}\n.askforCard {\n  position: absolute;\n  font-family: \"MAIANB\";\n  color: white;\n  top: 85vw;\n  font-size: 10vw;\n  width: 100vw;\n  text-align: center;\n}\n.playerSpeech {\n  position: absolute;\n  background-color: white;\n  color: black;\n  font-family: \"MAIANB\";\n  font-size: 8vw;\n  border: 1px solid black;\n  border-radius: 4vw;\n  padding: 2vw;\n  text-align: center;\n  z-index: 15;\n}\n.speech1 {\n  left: 61vw;\n  top: 36vw;\n}\n.speech2 {\n  left: 49vw;\n  top: 1vw;\n}\n.speech3 {\n  left: 16vw;\n  top: 66vw;\n}\n.greenoverlay {\n  background-color: rgba(2, 123, 111, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRoZW1lXFxmb250cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWluZSUyMHRhc2slMjBwcm9qZWN0c1xcYXVkaW9cXHNyY1xcYXBwXFxwYWdlc1xcZ2FtZS1wbGF5XFxnYW1lLXBsYXkucGFnZS5zY3NzIiwiZ2FtZS1wbGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFBO0FBQ0E7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxR0FBQTtFQUNBLHlLQUFBO0FDQ0o7QURDRSxVQUFBO0FBQ0E7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnSEFBQTtFQUNBLHlLQUFBO0FDQ0o7QURDRSxhQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnR0FBQTtFQUNBLDREQUFBO0FDQ0o7QURDRSxXQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtSUFBQTtFQUNBLHVEQUFBO0FDQ0o7QURDRSxjQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtSUFBQTtFQUNBLG1IQUFBO0FDQ0o7QURDRSxVQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnSUFBQTtFQUNBLHlLQUFBO0FDQ0o7QURDRSxhQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2SUFBQTtFQUNBLDREQUFBO0FDQ0o7QURDRSxXQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2SUFBQTtFQUNBLHVEQUFBO0FDQ0o7QURDRSxjQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2SUFBQTtFQUNBLG1IQUFBO0FDQ0o7QURDRSxVQUFBO0FBQ0E7RUFD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LGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FEOEhWO0FDNUhRO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FEOEhWO0FDeEhBO0VBQ0UsdUJBQUE7QUQySEY7QUN6SEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRDRIRjtBQzFIQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUQ2SEY7QUMzSEE7RUFDRSxzQ0FBQTtBRDhIRjtBQzVIQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUQrSEY7QUM3SEE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FEZ0lGO0FDOUhBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QURpSUY7QUMvSEE7RUFDRSxVQUFBO0VBQ0EsUUFBQTtBRGtJRjtBQy9IQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FEa0lGO0FDL0hBO0VBQ0Usd0NBQUE7QURrSUYiLCJmaWxlIjoiZ2FtZS1wbGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGxhdGluICovXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDaGV3eSc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgc3JjOiBsb2NhbCgnQ2hld3kgUmVndWxhcicpLCBsb2NhbCgnQ2hld3ktUmVndWxhcicpLCB1cmwoXCIuLi9hc3NldHMvZm9udHMvdUtfOTRydVViLWstd241MktqSS53b2ZmMlwiKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xyXG4gIH1cclxuICAvKiBsYXRpbiAqL1xyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmVkb2thIE9uZSc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgc3JjOiBsb2NhbCgnRnJlZG9rYSBPbmUnKSwgbG9jYWwoJ0ZyZWRva2FPbmUtUmVndWxhcicpLCB1cmwoXCIuLi9hc3NldHMvZm9udHMvazNrVW84a0VJLXRBMVJSY1RaR21UbEhHQ2FjLndvZmYyXCIpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XHJcbiAgfVxyXG4gIC8qIGN5cmlsbGljICovXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBzcmM6IGxvY2FsKCdSdWJpaycpLCBsb2NhbCgnUnViaWstUmVndWxhcicpLCB1cmwoXCIuLi9hc3NldHMvZm9udHMvaUpXS0JYeUlmRG5JVjduRnJYeWkwQS53b2ZmMlwiKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XHJcbiAgfVxyXG4gIC8qIGhlYnJldyAqL1xyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgc3JjOiBsb2NhbCgnUnViaWsnKSwgbG9jYWwoJ1J1YmlrLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9ydWJpay92OS9pSldLQlh5SWZEbklWN25Eclh5aTBBLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA1OTAtMDVGRiwgVSsyMEFBLCBVKzI1Q0MsIFUrRkIxRC1GQjRGO1xyXG4gIH1cclxuICAvKiBsYXRpbi1leHQgKi9cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHNyYzogbG9jYWwoJ1J1YmlrJyksIGxvY2FsKCdSdWJpay1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcnViaWsvdjkvaUpXS0JYeUlmRG5JVjduUHJYeWkwQS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcclxuICB9XHJcbiAgLyogbGF0aW4gKi9cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHNyYzogbG9jYWwoJ1J1YmlrJyksIGxvY2FsKCdSdWJpay1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcnViaWsvdjkvaUpXS0JYeUlmRG5JVjduQnJYdy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcclxuICB9XHJcbiAgLyogY3lyaWxsaWMgKi9cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHNyYzogbG9jYWwoJ1J1YmlrIE1lZGl1bScpLCBsb2NhbCgnUnViaWstTWVkaXVtJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcnViaWsvdjkvaUpXSEJYeUlmRG5JVjdFeWptbVo4V0RtN1Eud29mZjIpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcclxuICB9XHJcbiAgLyogaGVicmV3ICovXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBzcmM6IGxvY2FsKCdSdWJpayBNZWRpdW0nKSwgbG9jYWwoJ1J1YmlrLU1lZGl1bScpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3J1YmlrL3Y5L2lKV0hCWHlJZkRuSVY3RXlqbW1mOFdEbTdRLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA1OTAtMDVGRiwgVSsyMEFBLCBVKzI1Q0MsIFUrRkIxRC1GQjRGO1xyXG4gIH1cclxuICAvKiBsYXRpbi1leHQgKi9cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHNyYzogbG9jYWwoJ1J1YmlrIE1lZGl1bScpLCBsb2NhbCgnUnViaWstTWVkaXVtJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcnViaWsvdjkvaUpXSEJYeUlmRG5JVjdFeWptbVQ4V0RtN1Eud29mZjIpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XHJcbiAgfVxyXG4gIC8qIGxhdGluICovXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBzcmM6IGxvY2FsKCdSdWJpayBNZWRpdW0nKSwgbG9jYWwoJ1J1YmlrLU1lZGl1bScpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3J1YmlrL3Y5L2lKV0hCWHlJZkRuSVY3RXlqbW1kOFdBLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xyXG4gIH1cclxuICAvKiBjeXJpbGxpYyAqL1xyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgc3JjOiBsb2NhbCgnUnViaWsgQm9sZCcpLCBsb2NhbCgnUnViaWstQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3J1YmlrL3Y5L2lKV0hCWHlJZkRuSVY3RjZpR21aOFdEbTdRLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XHJcbiAgfVxyXG4gIC8qIGhlYnJldyAqL1xyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgc3JjOiBsb2NhbCgnUnViaWsgQm9sZCcpLCBsb2NhbCgnUnViaWstQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3J1YmlrL3Y5L2lKV0hCWHlJZkRuSVY3RjZpR21mOFdEbTdRLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA1OTAtMDVGRiwgVSsyMEFBLCBVKzI1Q0MsIFUrRkIxRC1GQjRGO1xyXG4gIH1cclxuICAvKiBsYXRpbi1leHQgKi9cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHNyYzogbG9jYWwoJ1J1YmlrIEJvbGQnKSwgbG9jYWwoJ1J1YmlrLUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9ydWJpay92OS9pSldIQlh5SWZEbklWN0Y2aUdtVDhXRG03US53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcclxuICB9XHJcbiAgLyogbGF0aW4gKi9cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHNyYzogbG9jYWwoJ1J1YmlrIEJvbGQnKSwgbG9jYWwoJ1J1YmlrLUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9ydWJpay92OS9pSldIQlh5SWZEbklWN0Y2aUdtZDhXQS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcclxuICB9XHJcbiAgLyogaGVicmV3ICovXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgc3JjOiBsb2NhbCgnVmFyZWxhIFJvdW5kIFJlZ3VsYXInKSwgbG9jYWwoJ1ZhcmVsYVJvdW5kLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy92YXJlbGFyb3VuZC92MTIvdzhnZEgyODNUdmtfX0x1YTMyVHlzaklmcGN1UFA5Zy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswNTkwLTA1RkYsIFUrMjBBQSwgVSsyNUNDLCBVK0ZCMUQtRkI0RjtcclxuICB9XHJcbiAgLyogdmlldG5hbWVzZSAqL1xyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHNyYzogbG9jYWwoJ1ZhcmVsYSBSb3VuZCBSZWd1bGFyJyksIGxvY2FsKCdWYXJlbGFSb3VuZC1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvdmFyZWxhcm91bmQvdjEyL3c4Z2RIMjgzVHZrX19MdWEzMlR5c2pJZnFNdVBQOWcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMUVBMC0xRUY5LCBVKzIwQUI7XHJcbiAgfVxyXG4gIC8qIGxhdGluLWV4dCAqL1xyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHNyYzogbG9jYWwoJ1ZhcmVsYSBSb3VuZCBSZWd1bGFyJyksIGxvY2FsKCdWYXJlbGFSb3VuZC1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvdmFyZWxhcm91bmQvdjEyL3c4Z2RIMjgzVHZrX19MdWEzMlR5c2pJZnFjdVBQOWcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XHJcbiAgfVxyXG4gIC8qIGxhdGluICovXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgc3JjOiBsb2NhbCgnVmFyZWxhIFJvdW5kIFJlZ3VsYXInKSwgbG9jYWwoJ1ZhcmVsYVJvdW5kLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy92YXJlbGFyb3VuZC92MTIvdzhnZEgyODNUdmtfX0x1YTMyVHlzaklmcDh1UC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcclxuICB9XHJcblxyXG4gIC8qIGxhdGluLWV4dCAqL1xyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDaGFuZ28nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHNyYzogbG9jYWwoJ0NoYW5nbyBSZWd1bGFyJyksIGxvY2FsKCdDaGFuZ28tUmVndWxhcicpLCB1cmwoXCIuLi9hc3NldHMvZm9udHMvMlYwY0tJME9CNVU3V2FKQ3huZTVibFlLQXJITS53b2ZmMlwiKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xyXG4gIH1cclxuICAvKiBsYXRpbiAqL1xyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDaGFuZ28nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHNyYzogbG9jYWwoJ0NoYW5nbyBSZWd1bGFyJyksIGxvY2FsKCdDaGFuZ28tUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2NoYW5nby92OC8yVjBjS0kwT0I1VTdXYUpDeUhlNWJsWUtBZy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcclxuICB9XHJcblxyXG5cclxuXHJcbkBmb250LWZhY2V7XHJcbiAgZm9udC1mYW1pbHk6ICdCUkxOU0QnO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQlJMTlNELnR0ZicpO1xyXG59XHJcblxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OiAnQlJMTlNEQic7ICAgLy8vL2ZvciBidXR0b25cclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0JSTE5TREIudHRmJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2V7XHJcbiAgZm9udC1mYW1pbHk6ICdDb21peCc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db21peC50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTogJ01BSUFOJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL01BSUFOLnR0ZicpO1xyXG59XHJcblxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OiAnTUFJQU5CJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL01BSUFOQi50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTogJ3JpZm51bSc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9yaWZudW0udHRmJyk7XHJcbn1cclxuIiwiLyogbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDaGV3eVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoXCJDaGV3eSBSZWd1bGFyXCIpLCBsb2NhbChcIkNoZXd5LVJlZ3VsYXJcIiksIHVybChcIi4uL2Fzc2V0cy9mb250cy91S185NHJ1VWItay13bjUyS2pJLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuLyogbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGcmVkb2thIE9uZVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoXCJGcmVkb2thIE9uZVwiKSwgbG9jYWwoXCJGcmVkb2thT25lLVJlZ3VsYXJcIiksIHVybChcIi4uL2Fzc2V0cy9mb250cy9rM2tVbzhrRUktdEExUlJjVFpHbVRsSEdDYWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG4vKiBjeXJpbGxpYyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiBsb2NhbChcIlJ1YmlrXCIpLCBsb2NhbChcIlJ1YmlrLVJlZ3VsYXJcIiksIHVybChcIi4uL2Fzc2V0cy9mb250cy9pSldLQlh5SWZEbklWN25Gclh5aTBBLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XG59XG4vKiBoZWJyZXcgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoXCJSdWJpa1wiKSwgbG9jYWwoXCJSdWJpay1SZWd1bGFyXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3J1YmlrL3Y5L2lKV0tCWHlJZkRuSVY3bkRyWHlpMEEud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA1OTAtMDVGRiwgVSsyMEFBLCBVKzI1Q0MsIFUrRkIxRC1GQjRGO1xufVxuLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IGxvY2FsKFwiUnViaWtcIiksIGxvY2FsKFwiUnViaWstUmVndWxhclwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9ydWJpay92OS9pSldLQlh5SWZEbklWN25Qclh5aTBBLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbn1cbi8qIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IGxvY2FsKFwiUnViaWtcIiksIGxvY2FsKFwiUnViaWstUmVndWxhclwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9ydWJpay92OS9pSldLQlh5SWZEbklWN25Cclh3LndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cbi8qIGN5cmlsbGljICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IGxvY2FsKFwiUnViaWsgTWVkaXVtXCIpLCBsb2NhbChcIlJ1YmlrLU1lZGl1bVwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9ydWJpay92OS9pSldIQlh5SWZEbklWN0V5am1tWjhXRG03US53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcbn1cbi8qIGhlYnJldyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiBsb2NhbChcIlJ1YmlrIE1lZGl1bVwiKSwgbG9jYWwoXCJSdWJpay1NZWRpdW1cIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcnViaWsvdjkvaUpXSEJYeUlmRG5JVjdFeWptbWY4V0RtN1Eud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA1OTAtMDVGRiwgVSsyMEFBLCBVKzI1Q0MsIFUrRkIxRC1GQjRGO1xufVxuLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IGxvY2FsKFwiUnViaWsgTWVkaXVtXCIpLCBsb2NhbChcIlJ1YmlrLU1lZGl1bVwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9ydWJpay92OS9pSldIQlh5SWZEbklWN0V5am1tVDhXRG03US53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG59XG4vKiBsYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiBsb2NhbChcIlJ1YmlrIE1lZGl1bVwiKSwgbG9jYWwoXCJSdWJpay1NZWRpdW1cIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcnViaWsvdjkvaUpXSEJYeUlmRG5JVjdFeWptbWQ4V0Eud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuLyogY3lyaWxsaWMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogbG9jYWwoXCJSdWJpayBCb2xkXCIpLCBsb2NhbChcIlJ1YmlrLUJvbGRcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcnViaWsvdjkvaUpXSEJYeUlmRG5JVjdGNmlHbVo4V0RtN1Eud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XG59XG4vKiBoZWJyZXcgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogbG9jYWwoXCJSdWJpayBCb2xkXCIpLCBsb2NhbChcIlJ1YmlrLUJvbGRcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcnViaWsvdjkvaUpXSEJYeUlmRG5JVjdGNmlHbWY4V0RtN1Eud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA1OTAtMDVGRiwgVSsyMEFBLCBVKzI1Q0MsIFUrRkIxRC1GQjRGO1xufVxuLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IGxvY2FsKFwiUnViaWsgQm9sZFwiKSwgbG9jYWwoXCJSdWJpay1Cb2xkXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3J1YmlrL3Y5L2lKV0hCWHlJZkRuSVY3RjZpR21UOFdEbTdRLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbn1cbi8qIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IGxvY2FsKFwiUnViaWsgQm9sZFwiKSwgbG9jYWwoXCJSdWJpay1Cb2xkXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3J1YmlrL3Y5L2lKV0hCWHlJZkRuSVY3RjZpR21kOFdBLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cbi8qIGhlYnJldyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoXCJWYXJlbGEgUm91bmQgUmVndWxhclwiKSwgbG9jYWwoXCJWYXJlbGFSb3VuZC1SZWd1bGFyXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3ZhcmVsYXJvdW5kL3YxMi93OGdkSDI4M1R2a19fTHVhMzJUeXNqSWZwY3VQUDlnLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNTkwLTA1RkYsIFUrMjBBQSwgVSsyNUNDLCBVK0ZCMUQtRkI0Rjtcbn1cbi8qIHZpZXRuYW1lc2UgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJWYXJlbGEgUm91bmRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IGxvY2FsKFwiVmFyZWxhIFJvdW5kIFJlZ3VsYXJcIiksIGxvY2FsKFwiVmFyZWxhUm91bmQtUmVndWxhclwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy92YXJlbGFyb3VuZC92MTIvdzhnZEgyODNUdmtfX0x1YTMyVHlzaklmcU11UFA5Zy53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMUVBMC0xRUY5LCBVKzIwQUI7XG59XG4vKiBsYXRpbi1leHQgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJWYXJlbGEgUm91bmRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IGxvY2FsKFwiVmFyZWxhIFJvdW5kIFJlZ3VsYXJcIiksIGxvY2FsKFwiVmFyZWxhUm91bmQtUmVndWxhclwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy92YXJlbGFyb3VuZC92MTIvdzhnZEgyODNUdmtfX0x1YTMyVHlzaklmcWN1UFA5Zy53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG59XG4vKiBsYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoXCJWYXJlbGEgUm91bmQgUmVndWxhclwiKSwgbG9jYWwoXCJWYXJlbGFSb3VuZC1SZWd1bGFyXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3ZhcmVsYXJvdW5kL3YxMi93OGdkSDI4M1R2a19fTHVhMzJUeXNqSWZwOHVQLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cbi8qIGxhdGluLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNoYW5nb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoXCJDaGFuZ28gUmVndWxhclwiKSwgbG9jYWwoXCJDaGFuZ28tUmVndWxhclwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnRzLzJWMGNLSTBPQjVVN1dhSkN4bmU1YmxZS0FySE0ud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG59XG4vKiBsYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNoYW5nb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoXCJDaGFuZ28gUmVndWxhclwiKSwgbG9jYWwoXCJDaGFuZ28tUmVndWxhclwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9jaGFuZ28vdjgvMlYwY0tJME9CNVU3V2FKQ3lIZTVibFlLQWcud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJSTE5TRFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL0JSTE5TRC50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQlJMTlNEQlwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL0JSTE5TREIudHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWl4XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvQ29taXgudHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1BSUFOXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvTUFJQU4udHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1BSUFOQlwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL01BSUFOQi50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicmlmbnVtXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvcmlmbnVtLnR0ZlwiKTtcbn1cbkBrZXlmcmFtZXMgZXhhbXBsZSB7XG4gIGZyb20ge1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcbiAgfVxuICB0byB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgeWVsbG93O1xuICB9XG59XG5jYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5jb250YWluMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDgwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogNDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRhaW4xIC5ib2FyZCB7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIGhlaWdodDogNzAlO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbjEgLmJvYXJkIC5idG5Db250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLmNvbnRhaW4xIC5ib2FyZCAuYnRuQ29udGFpbmVyIC5sZWF2ZUJ0bixcbi5jb250YWluMSAuYm9hcmQgLmJ0bkNvbnRhaW5lciAucmVzdGFydEJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDAuNXZoO1xuICBmb250LXNpemU6IDR2aDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMzUlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JvdG9uX3Jvam9fcmVjdC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBoZWlnaHQ6IDZ2aDtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBmb250LWZhbWlseTogXCJCUkxOU0RCXCI7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4uY29udGFpbjEgLmJvYXJkIC5idG5Db250YWluZXIgLmxlYXZlQnRuOmFjdGl2ZSxcbi5jb250YWluMSAuYm9hcmQgLmJ0bkNvbnRhaW5lciAucmVzdGFydEJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JvdG9uX3Jvam9fcmVjdF9wcmVzcy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4uY29udGFpbiB7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluIC5ncmVlbkJvYXJkIHtcbiAgd2lkdGg6IDk2JTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBiYWNrZ3JvdW5kOiAjMTNhMTJkO1xuICBoZWlnaHQ6IDcwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMnB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuLmNvbnRhaW4gLmdyZWVuQm9hcmQgLmZpbmlzaFRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiQlJMTlNEQlwiO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDN2aDtcbiAgZm9udC1zaXplOiA1dmg7XG59XG4uY29udGFpbiAuZ3JlZW5Cb2FyZCBjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL21vc2FpY28ucG5nXCIpIGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMiU7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgaGVpZ2h0OiA1NSU7XG59XG4uY29udGFpbiAuZ3JlZW5Cb2FyZCBjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgLml0ZW1zIHtcbiAgaGVpZ2h0OiA4dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uY29udGFpbiAuZ3JlZW5Cb2FyZCBjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgLml0ZW1zIC5yYW5rTm8ge1xuICB3aWR0aDogMjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM3ZoO1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5jb250YWluIC5ncmVlbkJvYXJkIGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCAuaXRlbXMgLml0ZW0ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA4dmg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuLmNvbnRhaW4gLmdyZWVuQm9hcmQgY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IC5pdGVtcyAuaXRlbU5hbWUge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM3ZoO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLmNvbnRhaW4gLmdyZWVuQm9hcmQgY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IC5pdGVtcyAuaXRlbXNjb3JlIHtcbiAgd2lkdGg6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDN2aDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwNTc5NmQsICMwNTlmOGYsICMwMzc3NmMpO1xuICAtLW1pbi1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgLS1pb24tZm9udC1mYW1pbHk6IFwiTUFJQU5CXCI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4ubG9nbyBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC1oZWlnaHQ6IDh2aDtcbn1cbi5sb2dvIC5sdWRvIHtcbiAgbWFyZ2luLXRvcDogMXZoO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogNXZoO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2YwZmJjZjtcbiAgZm9udC1mYW1pbHk6IFwiTUFJQU5CXCI7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctbGVmdDogNCU7XG59XG4ubG9nbyAuY2xvc2VCdG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JvdG9uX2NlcnJhci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgd2lkdGg6IDEwJTtcbiAgaGVpZ2h0OiA1dmg7XG59XG4ubG9nbyAuY2xvc2VCdG46YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9ib3Rvbl9jZXJyYXJfcHJlc3MucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1mb250LWZhbWlseTogXCJCUkxOU0RCXCI7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRjb250YWluZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA3JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9tYWRlcm8ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTAlO1xufVxuLnRjb250YWluZXIgLnBsYXlpbmdCb2FyZCB7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogLTIlO1xuICBoZWlnaHQ6IGNhbGMoMTMwdncgLSA1cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhODAwO1xuICBib3gtc2hhZG93OiAycHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4udGNvbnRhaW5lciAucGxheWVycyAucGxheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTV2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyN2I2ZjtcbiAgYm9yZGVyLXJhZGl1czogM3Z3O1xufVxuLnRjb250YWluZXIgLnBsYXllcnMgLnBsYXllcjEge1xuICBtYXJnaW4tdG9wOiA2MHZ3O1xuICBtYXJnaW4tbGVmdDogLTJ2dztcbn1cbi50Y29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXIyIHtcbiAgbWFyZ2luLXRvcDogLTV2dztcbiAgbWFyZ2luLWxlZnQ6IDMwdnc7XG59XG4udGNvbnRhaW5lciAucGxheWVycyAucGxheWVyMyB7XG4gIG1hcmdpbi1sZWZ0OiA4NXZ3O1xuICBtYXJnaW4tdG9wOiAzMCU7XG59XG4udGNvbnRhaW5lciAudXNlclJlbGF0aXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4udGNvbnRhaW5lciAudXNlclJlbGF0aXZlIC51c2VyQnV0dG9ucyB7XG4gIHdpZHRoOiA2NSU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA5dnc7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLnRjb250YWluZXIgLnVzZXJSZWxhdGl2ZSAudXNlckJ1dHRvbnMgLnllc0J0biB7XG4gIHdpZHRoOiA0NyU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgaGVpZ2h0OiAxNXZ3O1xuICBwYWRkaW5nLXRvcDogMnZ3O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JvdG9uX3ZlcmRlX3JlY3QucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbi50Y29udGFpbmVyIC51c2VyUmVsYXRpdmUgLnVzZXJCdXR0b25zIC55ZXNCdG46YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9ib3Rvbl92ZXJkZV9yZWN0X3ByZXNzLnBuZ1wiKTtcbn1cbi50Y29udGFpbmVyIC51c2VyUmVsYXRpdmUgLnVzZXJCdXR0b25zIC5ub0J0biB7XG4gIHdpZHRoOiA0NyU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgcGFkZGluZy10b3A6IDJ2dztcbiAgaGVpZ2h0OiAxNXZ3O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JvdG9uX3Jvam9fcmVjdC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuLnRjb250YWluZXIgLnVzZXJSZWxhdGl2ZSAudXNlckJ1dHRvbnMgLm5vQnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYm90b25fcm9qb19yZWN0X3ByZXNzLnBuZ1wiKTtcbn1cbi50Y29udGFpbmVyIC51c2VyUmVsYXRpdmUgLnVzZXJQbGF5ZXIge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDEzJTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiYjg7XG4gIGJvcmRlci1yYWRpdXM6IDJ2dztcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbi50Y29udGFpbmVyIC51c2VyUmVsYXRpdmUgLnVzZXJQbGF5ZXIgLnR1cm5MZXR0ZXIge1xuICB3aWR0aDogMzMlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyMCU7XG59XG4udGNvbnRhaW5lciAudXNlclJlbGF0aXZlIC51c2VyUGxheWVyIC50dXJuUGxheWVySW5mbyB7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogNjUlO1xufVxuLnRjb250YWluZXIgLnVzZXJSZWxhdGl2ZSAudXNlclBsYXllciAudHVyblBsYXllckluZm8gLnR1cm5BdmF0YXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG4udGNvbnRhaW5lciAudXNlclJlbGF0aXZlIC51c2VyUGxheWVyIC50dXJuUGxheWVySW5mbyAudHVybk5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGNvbnRhaW5lciAucGxheWVyMUNhcmRzIC5zaG93aW5nQ2FyZHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAzdnc7XG4gIG1hcmdpbi10b3A6IDMydnc7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDE2dnc7XG59XG4udGNvbnRhaW5lciAucGxheWVyMUNhcmRzIC5zaG93aW5nQ2FyZHMgLmNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTB2dztcbiAgaGVpZ2h0OiAxNnZ3O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuLnRjb250YWluZXIgLnBsYXllcjFDYXJkcyAuaGlkZGVuQ2FyZHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAtOHZ3O1xuICBtYXJnaW4tdG9wOiAzMnZ3O1xuICB3aWR0aDogMTB2dztcbiAgaGVpZ2h0OiAxNnZ3O1xufVxuLnRjb250YWluZXIgLnBsYXllcjFDYXJkcyAuaGlkZGVuQ2FyZHMgLmNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDE2dnc7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG4udGNvbnRhaW5lciAucGxheWVyMUNhcmRzIC5vbmVTaG93Q2FyZCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNXZ3O1xuICBoZWlnaHQ6IDIwdnc7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIG1hcmdpbi10b3A6IDQwdnc7XG4gIG1hcmdpbi1sZWZ0OiAyM3Z3O1xufVxuLnRjb250YWluZXIgLnBsYXllcjFDYXJkcyAub25lU2hvd0NhcmQgLnJlZE92ZXJsYXkxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTV2dztcbiAgaGVpZ2h0OiAyMHZ3O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICBtYXJnaW4tdG9wOiA0MHZ3O1xuICBtYXJnaW4tbGVmdDogMjN2dztcbn1cbi50Y29udGFpbmVyIC5wbGF5ZXIxQ2FyZHMgLmNhcmRQYWNrIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE3dnc7XG4gIGhlaWdodDogMjN2dztcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgbWFyZ2luLXRvcDogMjJ2dztcbiAgbWFyZ2luLWxlZnQ6IDIxdnc7XG59XG4udGNvbnRhaW5lciAucGxheWVyMkNhcmRzIC5zaG93aW5nQ2FyZHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA1NnZ3O1xuICB3aWR0aDogMTB2dztcbiAgaGVpZ2h0OiAyMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnRjb250YWluZXIgLnBsYXllcjJDYXJkcyAuc2hvd2luZ0NhcmRzIC5jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE2dnc7XG4gIHdpZHRoOiAxMHZ3O1xuICBtYXJnaW4tdG9wOiAtNnZ3O1xufVxuLnRjb250YWluZXIgLnBsYXllcjJDYXJkcyAuc2hvd2luZ0NhcmRzIGltZyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi50Y29udGFpbmVyIC5wbGF5ZXIyQ2FyZHMgLmhpZGRlbkNhcmRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogNTZ2dztcbiAgd2lkdGg6IDEwdnc7XG4gIGhlaWdodDogMjB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi50Y29udGFpbmVyIC5wbGF5ZXIyQ2FyZHMgLmhpZGRlbkNhcmRzIC5jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE2dnc7XG4gIHdpZHRoOiAxMHZ3O1xuICBtYXJnaW4tdG9wOiAtMTJ2dztcbn1cbi50Y29udGFpbmVyIC5wbGF5ZXIyQ2FyZHMgLmhpZGRlbkNhcmRzIGltZyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi50Y29udGFpbmVyIC5wbGF5ZXIyQ2FyZHMgLm9uZVNob3dDYXJkIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1dnc7XG4gIGhlaWdodDogMjB2dztcbiAgbWFyZ2luLXRvcDogMjB2dztcbiAgbWFyZ2luLWxlZnQ6IDQxdnc7XG59XG4udGNvbnRhaW5lciAucGxheWVyMkNhcmRzIC5vbmVTaG93Q2FyZCAucmVkT3ZlcmxheTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNXZ3O1xuICBoZWlnaHQ6IDIwdnc7XG4gIG1hcmdpbi10b3A6IDIwdnc7XG4gIG1hcmdpbi1sZWZ0OiA0MXZ3O1xufVxuLnRjb250YWluZXIgLnBsYXllcjJDYXJkcyAuY2FyZFBhY2sgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTd2dztcbiAgaGVpZ2h0OiAyM3Z3O1xuICBtYXJnaW4tdG9wOiAxOHZ3O1xuICBtYXJnaW4tbGVmdDogNTd2dztcbn1cbi50Y29udGFpbmVyIC5wbGF5ZXIzQ2FyZHMgLnNob3dpbmdDYXJkcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDg3dnc7XG4gIG1hcmdpbi10b3A6IDUzdnc7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDE2dnc7XG59XG4udGNvbnRhaW5lciAucGxheWVyM0NhcmRzIC5zaG93aW5nQ2FyZHMgLmNhcmQge1xuICB3aWR0aDogMTB2dztcbiAgaGVpZ2h0OiAxNnZ3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4udGNvbnRhaW5lciAucGxheWVyM0NhcmRzIC5oaWRkZW5DYXJkcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDk0dnc7XG4gIG1hcmdpbi10b3A6IDUzdnc7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDE2dnc7XG59XG4udGNvbnRhaW5lciAucGxheWVyM0NhcmRzIC5oaWRkZW5DYXJkcyAuY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi50Y29udGFpbmVyIC5wbGF5ZXIzQ2FyZHMgLm9uZVNob3dDYXJkIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1dnc7XG4gIGhlaWdodDogMjB2dztcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBtYXJnaW4tdG9wOiA0MHZ3O1xuICBtYXJnaW4tbGVmdDogNjB2dztcbn1cbi50Y29udGFpbmVyIC5wbGF5ZXIzQ2FyZHMgLm9uZVNob3dDYXJkIC5yZWRPdmVybGF5MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1dnc7XG4gIGhlaWdodDogMjB2dztcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBtYXJnaW4tdG9wOiA0MHZ3O1xuICBtYXJnaW4tbGVmdDogNjB2dztcbn1cbi50Y29udGFpbmVyIC5wbGF5ZXIzQ2FyZHMgLmNhcmRQYWNrIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE3dnc7XG4gIGhlaWdodDogMjN2dztcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBtYXJnaW4tdG9wOiA1NnZ3O1xuICBtYXJnaW4tbGVmdDogNjB2dztcbn1cbi50Y29udGFpbmVyIC51c2VyQ2FyZHMgLnNob3dpbmdDYXJkcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDM1dnc7XG4gIHdpZHRoOiAxOHZ3O1xuICBoZWlnaHQ6IDI0dnc7XG4gIG1hcmdpbi10b3A6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnRjb250YWluZXIgLnVzZXJDYXJkcyAuc2hvd2luZ0NhcmRzIC5jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDI4dnc7XG4gIHdpZHRoOiAxOHZ3O1xufVxuLnRjb250YWluZXIgLnVzZXJDYXJkcyAub25lU2hvd0NhcmQgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTV2dztcbiAgaGVpZ2h0OiAyMHZ3O1xuICBtYXJnaW4tdG9wOiA2MHZ3O1xuICBtYXJnaW4tbGVmdDogNDF2dztcbn1cbi50Y29udGFpbmVyIC51c2VyQ2FyZHMgLm9uZVNob3dDYXJkIC5yZWRPdmVybGF5MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1dnc7XG4gIGhlaWdodDogMjB2dztcbiAgbWFyZ2luLXRvcDogNjB2dztcbiAgbWFyZ2luLWxlZnQ6IDQxdnc7XG59XG4udGNvbnRhaW5lciAudXNlckNhcmRzIC5jYXJkUGFjayBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxN3Z3O1xuICBoZWlnaHQ6IDIzdnc7XG4gIG1hcmdpbi10b3A6IDU4dnc7XG4gIG1hcmdpbi1sZWZ0OiAyNHZ3O1xufVxuXG4ueW91V2luIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2NXZ3O1xuICB6LWluZGV4OiA1O1xuICBoZWlnaHQ6IDM0dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsZWZ0OiAxNy41dnc7XG4gIHRvcDogMzB2dztcbn1cbi55b3VXaW4gLnlvdVdpblRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNyB2dztcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2I3OTQyNSwgI2NkYTgyZiwgI2Y4ZTliNyk7XG4gIGZvbnQtZmFtaWx5OiBcIkJSTE5TREJcIjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE1dnc7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuOCkpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnlvdVdpbiAudGV4dEJhY2sge1xuICBib3JkZXItcmFkaXVzOiA0dnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC0xMnZ3O1xuICBoZWlnaHQ6IDE3dnc7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxMzcsIDE0LCAwLjgpO1xufVxuLnlvdVdpbiAueW91V2luSW5mbyB7XG4gIG1hcmdpbi10b3A6IDF2dztcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgaGVpZ2h0OiAxMiB2dztcbiAgYm9yZGVyLXJhZGl1czogNXZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxMzcsIDE0LCAwLjgpO1xuICBmb250LWZhbWlseTogXCJCUkxOU0RCXCI7XG4gIGZvbnQtc2l6ZTogOHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nLXRvcDogMXZ3O1xuICBwYWRkaW5nLWJvdHRvbTogMXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi55b3VXaW4gLnlvdVdpbkluZm8gaW1nIHtcbiAgd2lkdGg6IDh2dztcbn1cblxuaW9uLW1vZGFsIHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IFwiQlJMTlNEQlwiO1xuICAtLWJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAtLXdpZHRoOiA5MCU7XG4gIC0taGVpZ2h0OiA2MCU7XG4gIC0tYm9yZGVyLXJhZGl1czogMXZoO1xuICAtLWJhY2tncm91bmQ6ICMwMjdkNzE7XG59XG5pb24tbW9kYWwgLmNvbnRhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLW1vZGFsIC5jb250YWluIC5maW5pc2hUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJSTE5TREJcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzdmg7XG4gIGZvbnQtc2l6ZTogNHZoO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuaW9uLW1vZGFsIC5jb250YWluIC5sZWF2ZUJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDF2aDtcbiAgZm9udC1zaXplOiA0dmg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDQwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9ib3Rvbl9yb2pvX3JlY3QucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgaGVpZ2h0OiA4dmg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgZm9udC1mYW1pbHk6IFwiQlJMTlNEQlwiO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuaW9uLW1vZGFsIC5jb250YWluIC5sZWF2ZUJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JvdG9uX3Jvam9fcmVjdF9wcmVzcy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuaW9uLW1vZGFsIC5jb250YWluIGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbW9zYWljby5wbmdcIikgY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBoZWlnaHQ6IDU1JTtcbiAgZm9udC1mYW1pbHk6IFwiQlJMTlNEQlwiO1xufVxuaW9uLW1vZGFsIC5jb250YWluIGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCAuaXRlbXMge1xuICBoZWlnaHQ6IDh2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbmlvbi1tb2RhbCAuY29udGFpbiBjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgLml0ZW1zIC5yYW5rTm8ge1xuICB3aWR0aDogMjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM3ZoO1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbmlvbi1tb2RhbCAuY29udGFpbiBjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgLml0ZW1zIC5pdGVtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogOHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbmlvbi1tb2RhbCAuY29udGFpbiBjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgLml0ZW1zIC5pdGVtTmFtZSB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzdmg7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5pb24tbW9kYWwgLmNvbnRhaW4gY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IC5pdGVtcyAuaXRlbXNjb3JlIHtcbiAgd2lkdGg6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDN2aDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmJvcmRlclN0cm9rZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ucGxheWluZ0JvYXJkMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkYmFja0ltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yZWRPdmVybGF5LCAucmVkT3ZlcmxheTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC40KTtcbn1cblxuLmFza2ZvckNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiBcIk1BSUFOQlwiO1xuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogODV2dztcbiAgZm9udC1zaXplOiAxMHZ3O1xuICB3aWR0aDogMTAwdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBsYXllclNwZWVjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiTUFJQU5CXCI7XG4gIGZvbnQtc2l6ZTogOHZ3O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNHZ3O1xuICBwYWRkaW5nOiAydnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTU7XG59XG5cbi5zcGVlY2gxIHtcbiAgbGVmdDogNjF2dztcbiAgdG9wOiAzNnZ3O1xufVxuXG4uc3BlZWNoMiB7XG4gIGxlZnQ6IDQ5dnc7XG4gIHRvcDogMXZ3O1xufVxuXG4uc3BlZWNoMyB7XG4gIGxlZnQ6IDE2dnc7XG4gIHRvcDogNjZ2dztcbn1cblxuLmdyZWVub3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTIzLCAxMTEsIDAuNSk7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL2ZvbnRzLnNjc3NcIjtcclxuJHJlZC1jb2xvcjogI2ZmMDAwMDtcclxuJGdyZWVuLWNvbG9yOiAjMDBhODAwO1xyXG4kYmx1ZS1jb2xvcjogIzAwN2JjNDtcclxuJHllbGxvdy1jb2xvcjogI2Y0Y2ExNjtcclxuXHJcbiRzaXplLWRpY2U6IDQ1cHg7XHJcblxyXG4kbG9jYXRpb24tc2l6ZTogY2FsYyg1dncgKyA1cHgpO1xyXG4kbG9jYXRpb24tY2lyY2xlLXNpemU6IGNhbGMoMS41dncgKyA1cHgpO1xyXG5cclxuJGNscjogIzM3MmM0NDtcclxuQGtleWZyYW1lcyBleGFtcGxlIHtcclxuICBmcm9tIHtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgeWVsbG93O1xyXG4gIH1cclxufVxyXG5jYW52YXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4vLyBkaXYgeyBoZWlnaHQ6IDEwMCV9XHJcbi5jb250YWluMSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiA4MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC5ib2FyZCB7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC5idG5Db250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgei1pbmRleDogMjA7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAubGVhdmVCdG4sXHJcbiAgICAgIC5yZXN0YXJ0QnRuIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDAuNXZoO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHZoO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYm90b25fcm9qb19yZWN0LnBuZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDZ2aDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQlJMTlNEQlwiO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDFweCByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjgpO1xyXG4gICAgICB9XHJcbiAgICAgIC5sZWF2ZUJ0bjphY3RpdmUsXHJcbiAgICAgIC5yZXN0YXJ0QnRuOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9ib3Rvbl9yb2pvX3JlY3RfcHJlc3MucG5nXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbiB7XHJcbiAgei1pbmRleDogMjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC5ncmVlbkJvYXJkIHtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIGJhY2tncm91bmQ6ICMxM2ExMmQ7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDNweCByZ2JhKCRjb2xvcjogYmxhY2ssICRhbHBoYTogMC43KTtcclxuICAgIC5maW5pc2hUaXRsZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkJSTE5TREJcIjtcclxuICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMXB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuOCk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogM3ZoO1xyXG4gICAgICBmb250LXNpemU6IDV2aDtcclxuICAgIH1cclxuICAgIGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbW9zYWljby5wbmdcIikgY2VudGVyIGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgICBoZWlnaHQ6IDU1JTtcclxuICAgICAgLml0ZW1zIHtcclxuICAgICAgICBoZWlnaHQ6IDh2aDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAucmFua05vIHtcclxuICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDN2aDtcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDh2aDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgICAgLy8gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLml0ZW1OYW1lIHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDN2aDtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXRlbXNjb3JlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDN2aDtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDU3OTZkLCAjMDU5ZjhmLCAjMDM3NzZjKTsgLy8gIzAyNzY2YTtcclxuICAtLW1pbi1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAtLWlvbi1mb250LWZhbWlseTogXCJNQUlBTkJcIjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4ubG9nbyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIG1heC13aWR0aDogMzUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGltZyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA4dmg7XHJcbiAgfVxyXG4gIC5sdWRvIHtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogNXZoO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMXB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuOCk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmMGZiY2Y7XHJcbiAgICBmb250LWZhbWlseTogXCJNQUlBTkJcIjtcclxuICAgIC8vIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAjRkZBNTAwO1xyXG4gICAgLy8gLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0JTtcclxuICB9XHJcbiAgLmNsb3NlQnRuIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYm90b25fY2VycmFyLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogNXZoO1xyXG4gIH1cclxuICAuY2xvc2VCdG46YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYm90b25fY2VycmFyX3ByZXNzLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiBcIkJSTE5TREJcIjtcclxuICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnRjb250YWluZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbWFkZXJvLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTAlO1xyXG5cclxuICAkaGVpZ2h0OiBjYWxjKDEwMHZ3IC0gNXB4KTtcclxuICAkaGVpZ2h0OiBjYWxjKDEzMHZ3IC0gNXB4KTtcclxuXHJcbiAgLnBsYXlpbmdCb2FyZCB7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogLTIlO1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTgwMDtcclxuICAgIC8vIGJveC1zaGFkb3c6IDJweCA1cHggIHJlZDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjcpO1xyXG4gIH1cclxuICAucGxheWVycyB7XHJcbiAgICAucGxheWVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTV2dztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAyN2I2ZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3Z3O1xyXG4gICAgfVxyXG4gICAgLnBsYXllcjEge1xyXG4gICAgICBtYXJnaW4tdG9wOiA2MHZ3O1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTJ2dztcclxuICAgIH1cclxuICAgIC5wbGF5ZXIyIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTV2dztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDMwdnc7XHJcbiAgICB9XHJcbiAgICAucGxheWVyMyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4NXZ3O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXNlclJlbGF0aXZlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAudXNlckJ1dHRvbnMge1xyXG4gICAgICB3aWR0aDogNjUlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogOXZ3O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgLnllc0J0biB7XHJcbiAgICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXZ3O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAydnc7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9ib3Rvbl92ZXJkZV9yZWN0LnBuZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAueWVzQnRuOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9ib3Rvbl92ZXJkZV9yZWN0X3ByZXNzLnBuZ1wiKTtcclxuICAgICAgfVxyXG4gICAgICAubm9CdG4ge1xyXG4gICAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAydnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXZ3O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYm90b25fcm9qb19yZWN0LnBuZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAubm9CdG46YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JvdG9uX3Jvam9fcmVjdF9wcmVzcy5wbmdcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXNlclBsYXllciB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIGhlaWdodDogMTMlO1xyXG4gICAgICAvLyBtYXJnaW4tOiA2NSU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmI4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAydnc7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIC50dXJuTGV0dGVyIHtcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgICB9XHJcbiAgICAgIC50dXJuUGxheWVySW5mbyB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAudHVybkF2YXRhciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudHVybk5hbWUge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBsYXljYXJkcyB7XHJcbiAgICAvLyBwb3NpdGlvbjogcmVhbDtcclxuICB9XHJcbiAgLnBsYXllcjFDYXJkcyB7XHJcbiAgICAuc2hvd2luZ0NhcmRzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogM3Z3O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMnZ3O1xyXG4gICAgICB3aWR0aDogMTB2dztcclxuICAgICAgaGVpZ2h0OiAxNnZ3O1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgICAgIGhlaWdodDogMTZ2dztcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGlkZGVuQ2FyZHMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtOHZ3O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMnZ3O1xyXG4gICAgICB3aWR0aDogMTB2dztcclxuICAgICAgaGVpZ2h0OiAxNnZ3O1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMHZ3O1xyXG5cclxuICAgICAgICBoZWlnaHQ6IDE2dnc7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm9uZVNob3dDYXJkIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDE1dnc7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHZ3O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgLy8gcm90YXRlOiAtOTBkZWc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDB2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjN2dztcclxuICAgICAgfVxyXG4gICAgICAucmVkT3ZlcmxheTF7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgICAgIGhlaWdodDogMjB2dztcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIC8vIHJvdGF0ZTogLTkwZGVnO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwdnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIzdnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkUGFjayB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxN3Z3O1xyXG4gICAgICAgIGhlaWdodDogMjN2dztcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIydnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIxdnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnBsYXllcjJDYXJkcyB7XHJcbiAgICAuc2hvd2luZ0NhcmRzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNTZ2dztcclxuICAgICAgd2lkdGg6IDEwdnc7XHJcbiAgICAgIGhlaWdodDogMjB2dztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDE2dnc7XHJcbiAgICAgICAgd2lkdGg6IDEwdnc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTZ2dztcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oaWRkZW5DYXJkcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDU2dnc7XHJcbiAgICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgICBoZWlnaHQ6IDIwdnc7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnZ3O1xyXG4gICAgICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMnZ3O1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm9uZVNob3dDYXJkIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDE1dnc7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHZ3O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwdnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQxdnc7XHJcbiAgICAgIH1cclxuICAgICAgLnJlZE92ZXJsYXkxIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDE1dnc7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHZ3O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwdnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQxdnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZFBhY2sge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTd2dztcclxuICAgICAgICBoZWlnaHQ6IDIzdnc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTh2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTd2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucGxheWVyM0NhcmRzIHtcclxuICAgIC5zaG93aW5nQ2FyZHMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4N3Z3O1xyXG4gICAgICBtYXJnaW4tdG9wOiA1M3Z3O1xyXG4gICAgICB3aWR0aDogMTB2dztcclxuICAgICAgaGVpZ2h0OiAxNnZ3O1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwdnc7XHJcbiAgICAgIGhlaWdodDogMTZ2dztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGlkZGVuQ2FyZHMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA5NHZ3O1xyXG4gICAgICBtYXJnaW4tdG9wOiA1M3Z3O1xyXG4gICAgICB3aWR0aDogMTB2dztcclxuICAgICAgaGVpZ2h0OiAxNnZ3O1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm9uZVNob3dDYXJkIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDE1dnc7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHZ3O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2MHZ3O1xyXG4gICAgICB9XHJcbiAgICAgIC5yZWRPdmVybGF5MSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgICAgIGhlaWdodDogMjB2dztcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDB2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDogNjB2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkUGFjayB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxN3Z3O1xyXG4gICAgICAgIGhlaWdodDogMjN2dztcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTZ2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDogNjB2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVzZXJDYXJkcyB7XHJcbiAgICAuc2hvd2luZ0NhcmRzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzV2dztcclxuICAgICAgd2lkdGg6IDE4dnc7XHJcbiAgICAgIGhlaWdodDogMjR2dztcclxuICAgICAgbWFyZ2luLXRvcDogMTAwdnc7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHZ3O1xyXG4gICAgICAgIHdpZHRoOiAxOHZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAub25lU2hvd0NhcmQge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTV2dztcclxuICAgICAgICBoZWlnaHQ6IDIwdnc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjB2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDF2dztcclxuICAgICAgfVxyXG4gICAgICAucmVkT3ZlcmxheTEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTV2dztcclxuICAgICAgICBoZWlnaHQ6IDIwdnc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjB2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDF2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmRQYWNrIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDE3dnc7XHJcbiAgICAgICAgaGVpZ2h0OiAyM3Z3O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDU4dnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy8gLnBsYXllcjJDYXJkcyB7XHJcbiAgLy8gICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAvLyAgIC5zaG93aW5nQ2FyZHMge1xyXG4gIC8vICAgICBtYXJnaW4tbGVmdDogODR2dztcclxuICAvLyAgICAgbWFyZ2luLXRvcDogNDAlO1xyXG4gIC8vICAgICB3aWR0aDogMTN2dztcclxuICAvLyAgICAgaGVpZ2h0OiAyMHZ3O1xyXG4gIC8vICAgICAuY2FyZCB7XHJcbiAgLy8gICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgLy8gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gICAgICAgcm90YXRlOiA5MGRlZztcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufVxyXG5cclxuLnlvdVdpbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNjV2dztcclxuICB6LWluZGV4OiA1O1xyXG4gIGhlaWdodDogMzR2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbGVmdDogMTcuNXZ3O1xyXG4gIHRvcDogMzB2dztcclxuICAueW91V2luVGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTcgdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjYjc5NDI1LCAjY2RhODJmLCAjZjhlOWI3KTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJSTE5TREJcIjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMTV2dztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAxcHggcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC44KSk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAudGV4dEJhY2sge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHZ3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJ2dztcclxuICAgIGhlaWdodDogMTd2dztcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwZTg5MGUsICRhbHBoYTogMC44KTtcclxuICB9XHJcblxyXG4gIC55b3VXaW5JbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IDF2dztcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgaGVpZ2h0OiAxMiB2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDV2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMGU4OTBlLCAkYWxwaGE6IDAuOCk7XHJcbiAgICBmb250LWZhbWlseTogXCJCUkxOU0RCXCI7XHJcbiAgICBmb250LXNpemU6IDh2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZy10b3A6IDF2dztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogOHZ3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tbW9kYWwge1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiBcIkJSTE5TREJcIjtcclxuICAtLWJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIC8vIC0td2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIC0td2lkdGg6IDkwJTtcclxuICAtLWhlaWdodDogNjAlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMXZoO1xyXG4gIC0tYmFja2dyb3VuZDogIzAyN2Q3MTtcclxuICAuY29udGFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC5maW5pc2hUaXRsZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkJSTE5TREJcIjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAzdmg7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHZoO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxcHggcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC44KTtcclxuICAgIH1cclxuICAgIC5sZWF2ZUJ0biB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy10b3A6IDF2aDtcclxuICAgICAgZm9udC1zaXplOiA0dmg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9ib3Rvbl9yb2pvX3JlY3QucG5nXCIpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgaGVpZ2h0OiA4dmg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiQlJMTlNEQlwiO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxcHggcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC44KTtcclxuICAgIH1cclxuICAgIC5sZWF2ZUJ0bjphY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JvdG9uX3Jvam9fcmVjdF9wcmVzcy5wbmdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgfVxyXG4gICAgY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9tb3NhaWNvLnBuZ1wiKSBjZW50ZXIgY2VudGVyO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgIGhlaWdodDogNTUlO1xyXG4gICAgICBmb250LWZhbWlseTogXCJCUkxOU0RCXCI7XHJcbiAgICAgIC5pdGVtcyB7XHJcbiAgICAgICAgaGVpZ2h0OiA4dmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgLnJhbmtObyB7XHJcbiAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzdmg7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiA4dmg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICAgIC8vICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtTmFtZSB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzdmg7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLml0ZW1zY29yZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzdmg7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmJvcmRlclN0cm9rZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLnBsYXlpbmdCb2FyZDEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uY2FyZGJhY2tJbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5yZWRPdmVybGF5LC5yZWRPdmVybGF5MXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogcmVkLCAkYWxwaGE6IDAuNCk7XHJcbn1cclxuLmFza2ZvckNhcmR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnTUFJQU5CJztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdG9wOiA4NXZ3O1xyXG4gIGZvbnQtc2l6ZTogMTB2dztcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wbGF5ZXJTcGVlY2h7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogJ01BSUFOQic7XHJcbiAgZm9udC1zaXplOiA4dnc7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNHZ3O1xyXG4gIHBhZGRpbmc6IDJ2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTU7XHJcbn1cclxuLnNwZWVjaDF7XHJcbiAgbGVmdDogNjF2dztcclxuICB0b3A6MzZ2dztcclxufVxyXG4uc3BlZWNoMntcclxuICBsZWZ0OiA0OXZ3O1xyXG4gIHRvcDoxdnc7XHJcbn1cclxuXHJcbi5zcGVlY2gze1xyXG4gIGxlZnQ6IDE2dnc7XHJcbiAgdG9wOjY2dnc7XHJcbn1cclxuXHJcbi5ncmVlbm92ZXJsYXl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMjdiNmYsICRhbHBoYTogMC41KTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3730:
/*!****************************************************************!*\
  !*** ./src/app/pages/game-play/game-play.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\r\n  <div class=\"logo\">\r\n    <img src='../../../assets/img/avatars/avatar_{{myAvatar}}.png' />\r\n    <div class=\"ludo\">\r\n      <span>{{myName}}</span>\r\n\r\n    </div>\r\n    <div class=\"closeBtn\" (click)=\"leaveModalShow()\">\r\n    </div>\r\n  </div>\r\n\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"padding\">\r\n  <img id=\"cardbackImg\" class=\"cardbackImg\" src='../../../assets/img/mazo_3.png'/>\r\n\r\n  <canvas *ngIf=\"resultInfoShow\"  inViewport [inViewportOptions]=\"{ threshold: [0], partial: true }\"\r\n    (inViewportAction)=\"setItemVisibility($event)\" [id]=\"canvasId\">\r\n    <ng-content>\r\n\r\n    </ng-content>\r\n\r\n  </canvas>\r\n\r\n  <div class=\"youWin\" *ngIf=\"resultInfoShow\">\r\n    <div class=\"youWinText\">\r\n      You {{earnedGameScoreAtTurn[0]>0?'Win':'Lose'}}!\r\n    </div>\r\n    <div class=\"textBack\"></div>\r\n\r\n    <div class=\"youWinInfo\">\r\n      <img src=\"../../../assets/img/avatars/avatar_0.png\"/>\r\n      <div class=\"winName\">master</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"contain1\" [hidden]=\"!turnGameFinished\">\r\n    <div class=\"board\">\r\n      <div class=\"btnContainer\">\r\n        <div class=\"leaveBtn\" (click)=\"leaveTable()\">Leave</div>\r\n        <div class=\"restartBtn\" (click)=\"continueGame()\">Continue</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"tcontainer\">\r\n    <div class=\"playingBoard\" [hidden]=\"turnGameFinished\">\r\n      <div class=\"players\" [ngStyle]=\"{'background-color':currentTurn}\">\r\n        <img class=\"player player1\" [ngStyle]=\"{'background-color':currentTurn==3?'red':'#027b6f'}\" *ngIf=\"playerNum>3\" src=\"../../../assets/img/avatars/avatar_{{usersAvatar[3]}}.png\"/>\r\n        <img class=\"player player2\" [ngStyle]=\"{'background-color':currentTurn==2?'red':'#027b6f'}\"  *ngIf=\"playerNum>2\" src=\"../../../assets/img/avatars/avatar_{{usersAvatar[2]}}.png\"/>\r\n        <img class=\"player player3\" [ngStyle]=\"{'background-color':currentTurn==1?'red':'#027b6f'}\"   src=\"../../../assets/img/avatars/avatar_{{usersAvatar[1]}}.png\"/>\r\n\r\n        <div class=\"playerSpeech speech1\" *ngIf=\"showSpeech[1] || standShow[1]\">{{ standShow[1] ?'Stand!' :'Card!'}}</div>\r\n        <div class=\"playerSpeech speech2\" *ngIf=\"showSpeech[2] || standShow[2]\">{{ standShow[2] ?'Stand!' :'Card!'}}</div>\r\n        <div class=\"playerSpeech speech3\" *ngIf=\"showSpeech[3] || standShow[3]\">{{ standShow[3] ?'Stand!' :'Card!'}}</div>\r\n      </div>\r\n\r\n      <div class=\"playcards\">\r\n        <div class=\"player1Cards\"  *ngIf=\"playerNum>3\">\r\n          <div class=\"showingCards\" *ngIf=\"scoreOverflow[3] || showallCards\">\r\n            <img class=\"card\" *ngFor=\"let item of pickedCards[3];let i=index\" [ngStyle]=\"{'margin-top':-3*(pickedCards[3].length-1)+6*i+'vw','z-index':i}\" src='../../../assets/img/{{pickedCards[3][i].src}}'/>\r\n            <div *ngIf=\"scoreOverflow[3]\">\r\n              <div class=\"card redOverlay1\"  *ngFor=\"let item of pickedCards[3];let i=index\" [ngStyle]=\"{'margin-top':-3*(pickedCards[3].length-1)+6*i+'vw','z-index':i}\"></div>\r\n            </div>\r\n\r\n            <!-- /////used when user win -->\r\n            <div *ngIf=\"earnedGameScoreAtTurn[3]>0\">\r\n              <div class=\"card redOverlay1 greenoverlay\"  *ngFor=\"let item of pickedCards[3];let i=index\" [ngStyle]=\"{'margin-top':-3*(pickedCards[3].length-1)+6*i+'vw','z-index':i}\"></div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"hiddenCards\" *ngIf=\"!scoreOverflow[3] && !showallCards\">\r\n            <img class=\"card\" *ngFor=\"let item of pickedCards[3];let i=index\" [ngStyle]=\"{'margin-top':-2*(pickedCards[3].length-1)+6*i+'vw','z-index':i}\" src=\"../../../assets/img/mazo_3.png\"/>\r\n          </div>\r\n\r\n          <div class=\"oneShowCard\">\r\n            <img class=\"card\" src='../../../assets/img/{{(oneShowingCards[3] && dealerTurn!==3) || showallCards?oneShowingCards[3].src:\"mazo_3.png\"}}'>\r\n            <div *ngIf=\"scoreOverflow[3]\">\r\n              <div class=\"card redOverlay1 \" ></div>\r\n            </div>\r\n\r\n            <!-- /////used when user win -->\r\n            <div *ngIf=\"earnedGameScoreAtTurn[3]>0\">\r\n              <div class=\"card redOverlay1 greenoverlay\" ></div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cardPack\" *ngIf=\"dealerTurn==3\">\r\n            <img class=\"card\" src=\"../../../assets/img/mazo_0.png\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"player2Cards\"  *ngIf=\"playerNum>2\">\r\n          <div class=\"showingCards\" *ngIf=\"scoreOverflow[2] || showallCards\">\r\n            <img class=\"card\" *ngFor=\"let item of pickedCards[2];let i=index\" [ngStyle]=\"{'margin-left':-3*(pickedCards[2].length-1)+6*i+'vw','z-index':5-i}\" src=\"../../../assets/img/{{pickedCards[2][i].src}}\"/>\r\n            <div *ngIf=\"scoreOverflow[2]\">\r\n               <div class=\"card redOverlay\" *ngFor=\"let item of pickedCards[2];let i=index\" [ngStyle]=\"{'margin-left':-3*(pickedCards[2].length-1)+6*i+'vw','z-index':5-i}\"></div>\r\n            </div>\r\n\r\n             <!-- /////used when user win -->\r\n             <div *ngIf=\"earnedGameScoreAtTurn[2]>0\">\r\n              <div class=\"card redOverlay greenoverlay\" *ngFor=\"let item of pickedCards[2];let i=index\" [ngStyle]=\"{'margin-left':-3*(pickedCards[2].length-1)+6*i+'vw','z-index':5-i}\"></div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"hiddenCards\" *ngIf=\"!scoreOverflow[2] && !showallCards\">\r\n            <img class=\"card\" *ngFor=\"let item of pickedCards[2];let i=index\" [ngStyle]=\"{'margin-left':-3*(pickedCards[2].length-1)+6*i+'vw','z-index':5-i}\" src=\"../../../assets/img/mazo_3.png\"/>\r\n          </div>\r\n\r\n          <div class=\"oneShowCard\">\r\n            <img class=\"card\" src='../../../assets/img/{{(oneShowingCards[2] && dealerTurn!==2) || showallCards?oneShowingCards[2].src:\"mazo_3.png\"}}'>\r\n            <div *ngIf=\"scoreOverflow[2]\">\r\n              <div class=\"card redOverlay1\" ></div>\r\n            </div>\r\n\r\n            <!-- /////used when user win -->\r\n            <div *ngIf=\"earnedGameScoreAtTurn[2]>0\">\r\n              <div class=\"card redOverlay1 greenoverlay\" ></div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cardPack\" *ngIf=\"dealerTurn==2\">\r\n            <img class=\"card\" src=\"../../../assets/img/mazo_0.png\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"player3Cards\">\r\n          <div class=\"showingCards\" *ngIf=\"scoreOverflow[1] || showallCards\">\r\n            <img class=\"card\" *ngFor=\"let item of pickedCards[1];let i=index\" [ngStyle]=\"{'margin-top':-3*(pickedCards[1].length-1)+6*i+'vw','z-index':5-i}\" src=\"../../../assets/img/{{pickedCards[1][i].src}}\"/>\r\n            <div *ngIf=\"scoreOverflow[1]\">\r\n              <div class=\"card redOverlay\" *ngFor=\"let item of pickedCards[1];let i=index\" [ngStyle]=\"{'margin-top':-3*(pickedCards[1].length-1)+6*i+'vw','z-index':5-i}\"></div>\r\n            </div>\r\n\r\n             <!-- /////used when user win -->\r\n             <div *ngIf=\"earnedGameScoreAtTurn[1]>0\">\r\n              <div class=\"card redOverlay greenoverlay\" *ngFor=\"let item of pickedCards[1];let i=index\" [ngStyle]=\"{'margin-top':-3*(pickedCards[1].length-1)+6*i+'vw','z-index':5-i}\"></div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"hiddenCards\"  *ngIf=\"!scoreOverflow[1] && !showallCards\">\r\n            <img class=\"card\" *ngFor=\"let item of pickedCards[1];let i=index\" [ngStyle]=\"{'margin-top':-3*(pickedCards[1].length-1)+6*i+'vw','z-index':5-i}\" src=\"../../../assets/img/mazo_3.png\"/>\r\n          </div>\r\n\r\n          <div class=\"oneShowCard\">\r\n            <img class=\"card\" src='../../../assets/img/{{(oneShowingCards[1] && dealerTurn !==1) || showallCards?oneShowingCards[1].src:\"mazo_3.png\"}}'>\r\n            <div *ngIf=\"scoreOverflow[1]\">\r\n              <div class=\"card redOverlay1\" ></div>\r\n            </div>\r\n\r\n            <!-- /////used when user win -->\r\n            <div *ngIf=\"earnedGameScoreAtTurn[1]>0\">\r\n              <div class=\"card redOverlay1 greenoverlay\" ></div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cardPack\" *ngIf=\"dealerTurn==1\">\r\n            <img class=\"card\" src=\"../../../assets/img/mazo_0.png\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"userCards\">\r\n          <div class=\"showingCards\">\r\n            <img class=\"card\" *ngFor=\"let item of pickedCards[0];let i=index\" [ngStyle]=\"{'margin-left':1-3*(pickedCards[0].length-1)+ 6*i+'vw','z-index':i}\" src=\"../../../assets/img/{{pickedCards[0][i].src}}\"/>\r\n            <div *ngIf=\"scoreOverflow[0]\">\r\n              <div class=\"card redOverlay\" *ngFor=\"let item of pickedCards[0];let i=index\" [ngStyle]=\"{'margin-left':1-3*(pickedCards[0].length-1)+ 6*i+'vw','z-index':i}\"></div>\r\n            </div>\r\n\r\n             <!-- /////used when user win -->\r\n             <div *ngIf=\"earnedGameScoreAtTurn[0]>0\">\r\n              <div class=\"card redOverlay greenoverlay\" *ngFor=\"let item of pickedCards[0];let i=index\" [ngStyle]=\"{'margin-left':1-3*(pickedCards[0].length-1)+ 6*i+'vw','z-index':i}\"></div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"oneShowCard\" >\r\n            <img class=\"card\" src='../../../assets/img/{{oneShowingCards[0]?oneShowingCards[0].src:\"mazo_3.png\"}}'>\r\n            <div *ngIf=\"scoreOverflow[0]\">\r\n              <div class=\"card redOverlay1\" ></div>\r\n            </div>\r\n\r\n            <!-- /////used when user win -->\r\n            <div *ngIf=\"earnedGameScoreAtTurn[0]>0\">\r\n              <div class=\"card redOverlay1 greenoverlay\" ></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"cardPack\" *ngIf=\"dealerTurn==0\">\r\n            <img class=\"card\" src=\"../../../assets/img/mazo_0.png\">\r\n          </div>\r\n\r\n          <div class=\"askforCard\" [ngStyle]=\"{'visibility':currentTurn===0 && !userAnimationPlaying && !passed[0]?'visible':'hidden'}\">Ask for a card?</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"playingBoard1\">\r\n      </div>\r\n\r\n     <div class=\"userRelative\">\r\n      <div  class=\"userButtons\"  [ngStyle]=\"{'visibility':currentTurn===0 && !userAnimationPlaying && !passed[0]?'visible':'hidden'}\">\r\n        <div class=\"yesBtn\" (click)=\"askCard()\">Yes</div>\r\n        <div class=\"noBtn\" (click)=\"noAsk()\">No</div>\r\n      </div>\r\n\r\n      <div class=\"userPlayer\">\r\n        <div class=\"turnLetter\">Turn</div>\r\n        <div class=\"turnPlayerInfo\">\r\n          <img class=\"turnAvatar\" src=\"../../../assets/img/avatars/avatar_{{usersAvatar[currentTurn]}}.png\"/>\r\n          <div class=\"turnName\">{{players[currentTurn]}}</div>\r\n        </div>\r\n      </div>\r\n     </div>\r\n    </div>\r\n\r\n    <div class=\"contain\" [hidden]=\"!turnGameFinished\">\r\n      <div class=\"greenBoard\">\r\n        <div class=\"finishTitle\">Game Summary</div>\r\n        <cdk-virtual-scroll-viewport itemSize=\"2\" minBufferPx=\"500\" maxBufferPx=\"500\">\r\n          <div class=\"items\" *cdkVirtualFor=\"let item of getArrayByN(playerNum);let i=index\">\r\n            <div class=\"rankNo\">{{i+1}}</div>\r\n            <div class=\"item\"\r\n              [ngStyle]=\"{'background-image':'url(../../../assets/img/avatars/avatar_'+usersAvatar[i]+'.png)'}\">\r\n            </div>\r\n            <div class=\"itemName\">{{players[i]}}</div>\r\n            <div class=\"itemscore\">{{scores[i]}}</div>\r\n          </div>\r\n        </cdk-virtual-scroll-viewport>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <ion-modal id=\"example-modal\" #modal trigger=\"open-custom-dialog\">\r\n    <ng-template>\r\n      <div class=\"contain\">\r\n        <div class=\"finishTitle\">Do you want to leave?</div>\r\n        <cdk-virtual-scroll-viewport itemSize=\"2\" minBufferPx=\"500\" maxBufferPx=\"500\">\r\n          <div class=\"items\" *cdkVirtualFor=\"let item of getArrayByN(playerNum);let i=index\">\r\n            <div class=\"rankNo\">{{i+1}}</div>\r\n            <div class=\"item\"\r\n              [ngStyle]=\"{'background-image':'url(../../../assets/img/avatars/avatar_'+usersAvatar[i]+'.png)'}\">\r\n            </div>\r\n            <div class=\"itemName\">{{players[i]}}</div>\r\n            <div class=\"itemscore\">{{scores[i]}}</div>\r\n          </div>\r\n        </cdk-virtual-scroll-viewport>\r\n        <div class=\"leaveBtn\" (click)=\"leaveTable()\">Leave</div>\r\n      </div>\r\n\r\n    </ng-template>\r\n  </ion-modal>\r\n</ion-content>\r\n";

/***/ }),

/***/ 7020:
/*!***************************************************************!*\
  !*** ./node_modules/canvas-confetti/dist/confetti.module.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// canvas-confetti v1.5.1 built on 2022-02-08T22:20:40.944Z
var module = {}; // source content

(function main(global, module, isWorker, workerSize) {
  var canUseWorker = !!(global.Worker && global.Blob && global.Promise && global.OffscreenCanvas && global.OffscreenCanvasRenderingContext2D && global.HTMLCanvasElement && global.HTMLCanvasElement.prototype.transferControlToOffscreen && global.URL && global.URL.createObjectURL);

  function noop() {} // create a promise if it exists, otherwise, just
  // call the function directly


  function promise(func) {
    var ModulePromise = module.exports.Promise;
    var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;

    if (typeof Prom === 'function') {
      return new Prom(func);
    }

    func(noop, noop);
    return null;
  }

  var raf = function () {
    var TIME = Math.floor(1000 / 60);
    var frame, cancel;
    var frames = {};
    var lastFrameTime = 0;

    if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
      frame = function (cb) {
        var id = Math.random();
        frames[id] = requestAnimationFrame(function onFrame(time) {
          if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
            lastFrameTime = time;
            delete frames[id];
            cb();
          } else {
            frames[id] = requestAnimationFrame(onFrame);
          }
        });
        return id;
      };

      cancel = function (id) {
        if (frames[id]) {
          cancelAnimationFrame(frames[id]);
        }
      };
    } else {
      frame = function (cb) {
        return setTimeout(cb, TIME);
      };

      cancel = function (timer) {
        return clearTimeout(timer);
      };
    }

    return {
      frame: frame,
      cancel: cancel
    };
  }();

  var getWorker = function () {
    var worker;
    var prom;
    var resolves = {};

    function decorate(worker) {
      function execute(options, callback) {
        worker.postMessage({
          options: options || {},
          callback: callback
        });
      }

      worker.init = function initWorker(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker.postMessage({
          canvas: offscreen
        }, [offscreen]);
      };

      worker.fire = function fireWorker(options, size, done) {
        if (prom) {
          execute(options, null);
          return prom;
        }

        var id = Math.random().toString(36).slice(2);
        prom = promise(function (resolve) {
          function workerDone(msg) {
            if (msg.data.callback !== id) {
              return;
            }

            delete resolves[id];
            worker.removeEventListener('message', workerDone);
            prom = null;
            done();
            resolve();
          }

          worker.addEventListener('message', workerDone);
          execute(options, id);
          resolves[id] = workerDone.bind(null, {
            data: {
              callback: id
            }
          });
        });
        return prom;
      };

      worker.reset = function resetWorker() {
        worker.postMessage({
          reset: true
        });

        for (var id in resolves) {
          resolves[id]();
          delete resolves[id];
        }
      };
    }

    return function () {
      if (worker) {
        return worker;
      }

      if (!isWorker && canUseWorker) {
        var code = ['var CONFETTI, SIZE = {}, module = {};', '(' + main.toString() + ')(this, module, true, SIZE);', 'onmessage = function(msg) {', '  if (msg.data.options) {', '    CONFETTI(msg.data.options).then(function () {', '      if (msg.data.callback) {', '        postMessage({ callback: msg.data.callback });', '      }', '    });', '  } else if (msg.data.reset) {', '    CONFETTI.reset();', '  } else if (msg.data.resize) {', '    SIZE.width = msg.data.resize.width;', '    SIZE.height = msg.data.resize.height;', '  } else if (msg.data.canvas) {', '    SIZE.width = msg.data.canvas.width;', '    SIZE.height = msg.data.canvas.height;', '    CONFETTI = module.exports.create(msg.data.canvas);', '  }', '}'].join('\n');

        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e) {
          // eslint-disable-next-line no-console
          typeof console !== undefined && typeof console.warn === 'function' ? console.warn('🎊 Could not load worker', e) : null;
          return null;
        }

        decorate(worker);
      }

      return worker;
    };
  }();

  var defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ['square', 'circle'],
    zIndex: 100,
    colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'],
    // probably should be true, but back-compat
    disableForReducedMotion: false,
    scalar: 1
  };

  function convert(val, transform) {
    return transform ? transform(val) : val;
  }

  function isOk(val) {
    return !(val === null || val === undefined);
  }

  function prop(options, name, transform) {
    return convert(options && isOk(options[name]) ? options[name] : defaults[name], transform);
  }

  function onlyPositiveInt(number) {
    return number < 0 ? 0 : Math.floor(number);
  }

  function randomInt(min, max) {
    // [min, max)
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function toDecimal(str) {
    return parseInt(str, 16);
  }

  function colorsToRgb(colors) {
    return colors.map(hexToRgb);
  }

  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, '');

    if (val.length < 6) {
      val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
    }

    return {
      r: toDecimal(val.substring(0, 2)),
      g: toDecimal(val.substring(2, 4)),
      b: toDecimal(val.substring(4, 6))
    };
  }

  function getOrigin(options) {
    var origin = prop(options, 'origin', Object);
    origin.x = prop(origin, 'x', Number);
    origin.y = prop(origin, 'y', Number);
    return origin;
  }

  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }

  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function getCanvas(zIndex) {
    var canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = zIndex;
    return canvas;
  }

  function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.scale(radiusX, radiusY);
    context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    context.restore();
  }

  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180);
    var radSpread = opts.spread * (Math.PI / 180);
    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
      angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: opts.color,
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      drift: opts.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar
    };
  }

  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
    fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
    fetti.wobble += fetti.wobbleSpeed;
    fetti.velocity *= fetti.decay;
    fetti.tiltAngle += 0.1;
    fetti.tiltSin = Math.sin(fetti.tiltAngle);
    fetti.tiltCos = Math.cos(fetti.tiltAngle);
    fetti.random = Math.random() + 2;
    fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
    fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
    var progress = fetti.tick++ / fetti.totalTicks;
    var x1 = fetti.x + fetti.random * fetti.tiltCos;
    var y1 = fetti.y + fetti.random * fetti.tiltSin;
    var x2 = fetti.wobbleX + fetti.random * fetti.tiltCos;
    var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
    context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';
    context.beginPath();

    if (fetti.shape === 'circle') {
      context.ellipse ? context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) : ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
    } else {
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
      context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
      context.lineTo(Math.floor(x2), Math.floor(y2));
      context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    }

    context.closePath();
    context.fill();
    return fetti.tick < fetti.totalTicks;
  }

  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice();
    var context = canvas.getContext('2d');
    var animationFrame;
    var destroy;
    var prom = promise(function (resolve) {
      function onDone() {
        animationFrame = destroy = null;
        context.clearRect(0, 0, size.width, size.height);
        done();
        resolve();
      }

      function update() {
        if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
          size.width = canvas.width = workerSize.width;
          size.height = canvas.height = workerSize.height;
        }

        if (!size.width && !size.height) {
          resizer(canvas);
          size.width = canvas.width;
          size.height = canvas.height;
        }

        context.clearRect(0, 0, size.width, size.height);
        animatingFettis = animatingFettis.filter(function (fetti) {
          return updateFetti(context, fetti);
        });

        if (animatingFettis.length) {
          animationFrame = raf.frame(update);
        } else {
          onDone();
        }
      }

      animationFrame = raf.frame(update);
      destroy = onDone;
    });
    return {
      addFettis: function (fettis) {
        animatingFettis = animatingFettis.concat(fettis);
        return prom;
      },
      canvas: canvas,
      promise: prom,
      reset: function () {
        if (animationFrame) {
          raf.cancel(animationFrame);
        }

        if (destroy) {
          destroy();
        }
      }
    };
  }

  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas;
    var allowResize = !!prop(globalOpts || {}, 'resize');
    var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
    var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, 'useWorker');
    var worker = shouldUseWorker ? getWorker() : null;
    var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
    var initialized = canvas && worker ? !!canvas.__confetti_initialized : false;
    var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
    var animationObj;

    function fireLocal(options, size, done) {
      var particleCount = prop(options, 'particleCount', onlyPositiveInt);
      var angle = prop(options, 'angle', Number);
      var spread = prop(options, 'spread', Number);
      var startVelocity = prop(options, 'startVelocity', Number);
      var decay = prop(options, 'decay', Number);
      var gravity = prop(options, 'gravity', Number);
      var drift = prop(options, 'drift', Number);
      var colors = prop(options, 'colors', colorsToRgb);
      var ticks = prop(options, 'ticks', Number);
      var shapes = prop(options, 'shapes');
      var scalar = prop(options, 'scalar');
      var origin = getOrigin(options);
      var temp = particleCount;
      var fettis = [];
      var startX = canvas.width * origin.x;
      var startY = canvas.height * origin.y;

      while (temp--) {
        fettis.push(randomPhysics({
          x: startX,
          y: startY,
          angle: angle,
          spread: spread,
          startVelocity: startVelocity,
          color: colors[temp % colors.length],
          shape: shapes[randomInt(0, shapes.length)],
          ticks: ticks,
          decay: decay,
          gravity: gravity,
          drift: drift,
          scalar: scalar
        }));
      } // if we have a previous canvas already animating,
      // add to it


      if (animationObj) {
        return animationObj.addFettis(fettis);
      }

      animationObj = animate(canvas, fettis, resizer, size, done);
      return animationObj.promise;
    }

    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
      var zIndex = prop(options, 'zIndex', Number);

      if (disableForReducedMotion && preferLessMotion) {
        return promise(function (resolve) {
          resolve();
        });
      }

      if (isLibCanvas && animationObj) {
        // use existing canvas from in-progress animation
        canvas = animationObj.canvas;
      } else if (isLibCanvas && !canvas) {
        // create and initialize a new canvas
        canvas = getCanvas(zIndex);
        document.body.appendChild(canvas);
      }

      if (allowResize && !initialized) {
        // initialize the size of a user-supplied canvas
        resizer(canvas);
      }

      var size = {
        width: canvas.width,
        height: canvas.height
      };

      if (worker && !initialized) {
        worker.init(canvas);
      }

      initialized = true;

      if (worker) {
        canvas.__confetti_initialized = true;
      }

      function onResize() {
        if (worker) {
          // TODO this really shouldn't be immediate, because it is expensive
          var obj = {
            getBoundingClientRect: function () {
              if (!isLibCanvas) {
                return canvas.getBoundingClientRect();
              }
            }
          };
          resizer(obj);
          worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        } // don't actually query the size here, since this
        // can execute frequently and rapidly


        size.width = size.height = null;
      }

      function done() {
        animationObj = null;

        if (allowResize) {
          global.removeEventListener('resize', onResize);
        }

        if (isLibCanvas && canvas) {
          document.body.removeChild(canvas);
          canvas = null;
          initialized = false;
        }
      }

      if (allowResize) {
        global.addEventListener('resize', onResize, false);
      }

      if (worker) {
        return worker.fire(options, size, done);
      }

      return fireLocal(options, size, done);
    }

    fire.reset = function () {
      if (worker) {
        worker.reset();
      }

      if (animationObj) {
        animationObj.reset();
      }
    };

    return fire;
  } // Make default export lazy to defer worker creation until called.


  var defaultFire;

  function getDefaultFire() {
    if (!defaultFire) {
      defaultFire = confettiCannon(null, {
        useWorker: true,
        resize: true
      });
    }

    return defaultFire;
  }

  module.exports = function () {
    return getDefaultFire().apply(this, arguments);
  };

  module.exports.reset = function () {
    getDefaultFire().reset();
  };

  module.exports.create = confettiCannon;
})(function () {
  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  return this || {};
}(), module, false); // end source content


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (module.exports);
var create = module.exports.create;

/***/ })

}]);
//# sourceMappingURL=src_app_pages_game-play_game-play_module_ts.js.map