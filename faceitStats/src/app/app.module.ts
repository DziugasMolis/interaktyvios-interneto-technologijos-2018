import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './page-main/search/search.component';
import { Top100Component } from './page-main/top100/top100.component';
import { ComparePlayersComponent } from './page-main/compare-players/compare-players.component';
import { BestPlayersByCountryComponent } from './page-main/best-players-by-country/best-players-by-country.component';

import { HeaderService } from './header/header.service';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    Top100Component,
    ComparePlayersComponent,
    BestPlayersByCountryComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
