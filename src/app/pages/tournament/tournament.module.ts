import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { InViewportModule } from 'ng-in-viewport';
import { TournamentPage } from './tournament.page';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TournamentPageRoutingModule } from './tournament-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    TournamentPageRoutingModule,
    InViewportModule
  ],
  declarations: [TournamentPage]
})
export class TournamentPageModule {}
