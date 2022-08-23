import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TournamentreadyPage } from './tournamentready.page';

const routes: Routes = [
  {
    path: '',
    component: TournamentreadyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentreadyPageRoutingModule {}
