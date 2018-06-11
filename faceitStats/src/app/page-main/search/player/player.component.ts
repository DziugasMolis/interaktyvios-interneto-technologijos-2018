import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public playerData = {};
    constructor(
    public searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.getPlayerData(this.searchService.selectedSearchElement['player_id']).subscribe(player => {
      console.log(player);
      this.playerData = player;
    });
  }

}
