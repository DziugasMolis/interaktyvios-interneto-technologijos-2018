import { PlayerComponent } from './page-main/search/player/player.component';
import { TournamentComponent } from './page-main/search/tournament/tournament.component';
import { TeamComponent } from './page-main/search/team/team.component';
import { BestPlayersByCountryComponent } from './page-main/best-players-by-country/best-players-by-country.component';
import { ComparePlayersComponent } from './page-main/compare-players/compare-players.component';
import { Top100Component } from './page-main/top100/top100.component';
import { SearchComponent } from './page-main/search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'top100', component: Top100Component },
    { path: 'compare-players', component: ComparePlayersComponent },
    { path: 'best-players-by-country', component: BestPlayersByCountryComponent },
    { path: 'player', component: PlayerComponent },
    { path: 'team', component: TeamComponent },
    { path: 'tournament', component: TournamentComponent }

  ];


  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}
