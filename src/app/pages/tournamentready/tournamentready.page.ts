import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tournamentready',
  templateUrl: './tournamentready.page.html',
  styleUrls: ['./tournamentready.page.scss'],
})
export class TournamentreadyPage implements OnInit {

  myAvatar;
  myName;

  passed;
  level: string;
  constructor(private userInfo: UserInfoService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.myAvatar=this.userInfo.getUserAvatar();
    this.myName=this.userInfo.getUserName();
    this.passed=0;  //////////////opened items
    this.route.queryParams.subscribe((params)=>{
      if(params){
        this.level=JSON.parse(params.gamelevel);
        // console.log(this.level);
      }
    });
  }
  getArrayByN(n){
    return Array(n).fill(0);
  }

}
