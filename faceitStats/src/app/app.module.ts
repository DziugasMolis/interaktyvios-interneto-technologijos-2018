import { PlayerComponent } from './page-main/search/player/player.component';
import { TournamentComponent } from './page-main/search/tournament/tournament.component';
import { TeamComponent } from './page-main/search/team/team.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './page-main/search/search.component';
import { Top100Component } from './page-main/top100/top100.component';
import { ComparePlayersComponent } from './page-main/compare-players/compare-players.component';
import { BestPlayersByCountryComponent } from './page-main/best-players-by-country/best-players-by-country.component';

import { AppRoutingModule } from './app-routing.module';
import { SearchService } from './page-main/search/search.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    Top100Component,
    ComparePlayersComponent,
    BestPlayersByCountryComponent,
    TeamComponent,
    TournamentComponent,
    PlayerComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
