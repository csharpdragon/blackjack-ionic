import { Route,Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';
@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.page.html',
  styleUrls: ['./tournament.page.scss'],
})
export class TournamentPage implements OnInit {

  myAvatar;
  myName;

  passed;
  constructor(private userInfo: UserInfoService, private router: Router) { }

  ngOnInit() {
    this.myAvatar=this.userInfo.getUserAvatar();
    this.myName=this.userInfo.getUserName();
    this.passed=0;  //////////////opened items
  }
  getArrayByN(n){
    return Array(n).fill(0);
  }
  play(i){
    this.router.navigate(['/tournamentready'],{queryParams:{gamelevel:i}});
  }
}
