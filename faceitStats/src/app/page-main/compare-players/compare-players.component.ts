import { SearchService } from './../search/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-players',
  templateUrl: './compare-players.component.html',
  styleUrls: ['./compare-players.component.scss']
})
export class ComparePlayersComponent implements OnInit {

  public playerInput = '';

  public playersNameArray = [];
  public averageKDRatioArray = [];
  public averageHeadshotRatioArray = [];
  public winStreakArray = [];
  public matchesPlayedArray = [];
  public winRateArray = [];
  public eloArray = [];
  public levelArray = [];


  public statsKeys = [];
  public playerStats = {};
  constructor(
    public searchService: SearchService
  ) { }

  ngOnInit() {
  }


  addPlayer() {
    this.searchService.checkIfPlayerExists(this.playerInput).subscribe(res => {
      this.playersNameArray.push(this.playerInput);
      this.eloArray.push(res['games'][this.searchService.selectedGameURL]['faceit_elo']);
      this.levelArray.push(res['games'][this.searchService.selectedGameURL]['skill_level']);
      this.playerInput = '';
      this.searchService.getUserStatistics(res['player_id']).subscribe(stats => {
        this.statsKeys = Object.keys(stats['lifetime']);
        for (let i = 0; i < this.statsKeys.length; i++) {
          if (this.playerStats[this.statsKeys[i]]) {
            if (Array.isArray(stats['lifetime'][this.statsKeys[i]])) {
              this.setWinsAndLoses(stats['lifetime'][this.statsKeys[i]]);
            }
            this.playerStats[this.statsKeys[i]] = [this.playerStats[this.statsKeys[i]], stats['lifetime'][this.statsKeys[i]]];

          }
          else {
            if (Array.isArray(stats['lifetime'][this.statsKeys[i]])) {
              this.setWinsAndLoses(stats['lifetime'][this.statsKeys[i]]);
            }
            this.playerStats[this.statsKeys[i]] = [stats['lifetime'][this.statsKeys[i]]];
          }
        }
      });
    });
  }

  setWinsAndLoses(matches: any) {
    for (let i = 0; i < matches.length; i++) {
      if (matches[i] === '1') {
        matches[i] = 'WIN';
      }
      else {
        matches[i] = 'LOSE';
      }
    }
  }
  removePlayer(index: number) {
    this.playersNameArray.splice(index, 1);
    this.eloArray.splice(index, 1);
    this.levelArray.splice(index, 1);
    for (let i = 0; i < this.statsKeys.length; i++) {
      this.playerStats[this.statsKeys[i]].splice(index, 1);
    }
    if (this.playerStats[this.statsKeys[0]].length === 0) {
      this.statsKeys.length = 0;
    }
  }
}
