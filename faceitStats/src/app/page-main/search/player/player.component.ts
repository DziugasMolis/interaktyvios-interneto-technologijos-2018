import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public playerData = {};
  public games = [];
  public gamesStats = {};

  public elo = {};
  // Pie
  public pieChartLabels: string[] = ['Matches win %', 'Matches lost %'];
  public pieChartDataCSGO = [];
  public pieChartData_tf2 = [];
  public pieChartData_ov_eu = [];
  public pieChartData_ov_us = [];
  public pieChartData_dota2 = [];
  public pieChartData_loleuw = [];
  public pieChartData_loleun = [];
  public pieChartData_lolna = [];
  public pieChartData_woteu = [];
  public pieChartData_wotru = [];
  public pieChartData_wotna = [];
  public pieChartData_smite = [];
  public pieChartType: string = 'pie';

  constructor(
    public searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.getPlayerData(this.searchService.selectedSearchElement['player_id']).subscribe(player => {
      console.log(player);
      this.playerData = player;
      this.games = Object.keys(this.playerData['games']);
      
      for (let i = 0; i < this.games.length; i++) {
        this.elo[this.games[i]] = [player['games'][this.games[i]]['faceit_elo'], player['games'][this.games[i]]['skill_level']];
        this.searchService.getPlayerStatsByGame(this.playerData['player_id'], this.games[i]).subscribe(stats => {
          this.gamesStats[stats['game_id']] = Object.entries(stats['lifetime']);
          this.setDataForPieChart(stats['game_id'], stats['lifetime']);
        });
      }
      console.log(this.gamesStats);
    });
  }

  setWinsAndLoses(matches: any) {
    if (Array.isArray(matches)) {
      for (let i = 0; i < matches.length; i++) {
        if (matches[i] === '1') {
          matches[i] = 'W';
        }
        else {
          matches[i] = 'L';
        }
      }
      return matches;
    }
    else { return matches; }
  }

  setDataForPieChart(gameId: string, stats: {}) {
    switch (gameId) {
      case 'csgo': {
        this.pieChartDataCSGO.push(Number(stats['Win Rate %']));
        this.pieChartDataCSGO.push((100 - Number(stats['Win Rate %'])));
        break;
      }
      case 'tf2': {
        this.pieChartData_tf2.push(Number(stats['Win rate %']));
        this.pieChartData_tf2.push((100 - Number(stats['Win rate %'])));
        break;
      }
      case 'overwatch_EU': { 
        this.pieChartData_ov_eu.push(Number(stats['Win Rate %']));
        this.pieChartData_ov_eu.push((100 - Number(stats['Win Rate %'])));
        break;
      }
      case 'overwatch_US': { 
        this.pieChartData_ov_us.push(Number(stats['Win Rate %']));
        this.pieChartData_ov_us.push((100 - Number(stats['Win Rate %'])));
        break;
      }
      case 'dota2': {
        this.pieChartData_dota2.push(Number(stats['Win Rate %']));
        this.pieChartData_dota2.push((100 - Number(stats['Win Rate %'])));
        break;
      }
      case 'lol_EUW':{
        this.pieChartData_loleuw.push(Number(stats['Win rate %']));
        this.pieChartData_loleuw.push((100 - Number(stats['Win rate %'])));
        break;
      }
      case 'lol_EUN':{
        this.pieChartData_loleun.push(Number(stats['Win rate %']));
        this.pieChartData_loleun.push((100 - Number(stats['Win rate %'])));
        break;
      }
      case 'lol_NA':{
        this.pieChartData_lolna.push(Number(stats['Win rate %']));
        this.pieChartData_lolna.push((100 - Number(stats['Win rate %'])));
        break;
      }
      case 'wot_EU':{
        this.pieChartData_woteu.push(Number(stats['Win rate']));
        this.pieChartData_woteu.push((100 - Number(stats['Win rate'])));
        break;
      }
      case 'wot_RU': {
        this.pieChartData_wotru.push(Number(stats['Win Rate %']));
        this.pieChartData_wotru.push((100 - Number(stats['Win Rate %'])));
        break;
      }
      case 'wot_NA': {
        this.pieChartData_wotna.push(Number(stats['Win Rate %']));
        this.pieChartData_wotna.push((100 - Number(stats['Win Rate %'])));
        break;
      }
      case 'smite': {
        this.pieChartData_smite.push(Number(stats['Win rate %']));
        this.pieChartData_smite.push((100 - Number(stats['Win rate %'])));
        break;
      }

    }
  }
}
