import { SearchService } from './../search/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top100',
  templateUrl: './top100.component.html',
  styleUrls: ['./top100.component.scss']
})
export class Top100Component implements OnInit {

  constructor(
    public searchService: SearchService
  ) { }

  ngOnInit() {
    
    this.searchService.getTOPPlayersByGame(
      this.searchService.buildTOPURL(this.searchService.selectedGameURL, this.searchService.selectedRegionLink, 100)
    )
    .subscribe(res => {
      this.searchService.TOPPlayers = res.payload;
      console.log(this.searchService.TOPPlayers);
    });
  }

}
