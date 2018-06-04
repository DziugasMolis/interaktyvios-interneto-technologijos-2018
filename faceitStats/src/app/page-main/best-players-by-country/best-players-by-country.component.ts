import { SearchService } from './../search/search.service';
import { Component, OnInit } from '@angular/core';
import { Countries } from './countries';

@Component({
  selector: 'app-best-players-by-country',
  templateUrl: './best-players-by-country.component.html',
  styleUrls: ['./best-players-by-country.component.scss']
})
export class BestPlayersByCountryComponent implements OnInit {

  public selectedCountry;
  public countriesList = [];
  constructor(
    public searchService: SearchService
  ) { }

  ngOnInit() {
    this.countriesList = Countries.countries;
    this.searchService.selectedCountry = this.countriesList[0].code;

    const url = this.searchService.buildTopURLByCountry(this.searchService.selectedGameURL,
      this.searchService.selectedRegionLink, this.searchService.selectedCountry.toLowerCase(), 50);
    this.searchService.TOPPlayers.length = 0;
    this.searchService.getTOPPlayersByGame(url).subscribe(res => {
      this.searchService.TOPPlayers = res.payload;
      console.log(this.searchService.TOPPlayers);
    });
    // this.selectedGame = this.searchService.games[0];
  }

  public onCountryChange(event: any) {
    console.log(event);
    this.searchService.selectedCountry = event;
    const url = this.searchService.buildTopURLByCountry(this.searchService.selectedGameURL,
      this.searchService.selectedRegionLink, event.toLowerCase(), 50);
    this.searchService.TOPPlayers.length = 0;
    this.searchService.getTOPPlayersByGame(url).subscribe(res => {
      this.searchService.TOPPlayers = res.payload;
      console.log(this.searchService.TOPPlayers);
    });
  }
}
