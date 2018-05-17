import { SearchService } from './../search/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-players-by-country',
  templateUrl: './best-players-by-country.component.html',
  styleUrls: ['./best-players-by-country.component.scss']
})
export class BestPlayersByCountryComponent implements OnInit {

  public selectedGame;
  constructor(
    public searchService: SearchService
  ) { }

  ngOnInit() {
    this.selectedGame = this.searchService.games[0];
  }


  public onSelectedChange(event: number) {
    console.log(event);
  }
}
