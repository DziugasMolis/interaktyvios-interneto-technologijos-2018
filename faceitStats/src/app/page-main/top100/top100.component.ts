import { SearchService } from './../search/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top100',
  templateUrl: './top100.component.html',
  styleUrls: ['./top100.component.scss']
})
export class Top100Component implements OnInit {
  public TOP100Players = [];
  constructor(
    public searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.getTOPPlayersByGame(this.searchService.buildTOPURL(this.searchService.selectedGameURL, 100)).subscribe(res => {
      this.TOP100Players = res.payload;
      console.log(this.TOP100Players);
    });
  }


  public switchGame(game) {
    this.searchService.selectedGame = game.index;
    const url = this.searchService.buildTOPURL(game.url, 100);
    this.searchService.getTOPPlayersByGame(url).subscribe(res => {
      this.TOP100Players = res.payload;
      console.log(this.TOP100Players);
    });
  }
}
