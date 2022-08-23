import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { InViewportModule } from 'ng-in-viewport';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { TournamentreadyPageRoutingModule } from './tournamentready-routing.module';

import { TournamentreadyPage } from './tournamentready.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    TournamentreadyPageRoutingModule,
    InViewportModule
  ],
  declarations: [TournamentreadyPage]
})
export class TournamentreadyPageModule {}
