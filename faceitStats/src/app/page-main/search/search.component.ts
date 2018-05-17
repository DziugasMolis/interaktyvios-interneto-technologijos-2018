import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {



  public TOP5Players = [];

  constructor(
    public searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.getTOPPlayersByGame(this.searchService.buildTOPURL(this.searchService.selectedGameURL, 5)).subscribe(res => {
      this.TOP5Players = res.payload;
      console.log(this.TOP5Players);
    });
  }

  public switchGame(game) {
    this.searchService.selectedGame = game.index;
    this.searchService.selectedGameURL = game.url;
    const url = this.searchService.buildTOPURL(game.url, 5);
    this.searchService.getTOPPlayersByGame(url).subscribe(res => {
      this.TOP5Players = res.payload;
      console.log(this.TOP5Players);
    });
  }

  public redirectToPlayerPage(playerInfo: any) {
    window.location.replace('https://www.faceit.com/en/players/' + playerInfo.user.nickname);
  }
}
