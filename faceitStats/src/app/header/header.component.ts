import { SearchService } from './../page-main/search/search.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navMenu = ['SEARCH', 'TOP 100', 'COMPARE PLAYERS', 'BEST PLAYERS BY COUNTRY'];

  public selectedRegions = {};

  public games = [
    { name: 'CS:GO', key: 'csgo' },
    { name: 'TF:2', key: 'tf2' },
    { name: 'OVERWATCH', key: 'overwatch' },
    { name: 'DOTA2', key: 'dota2' },
    { name: 'LOL', key: 'lol' },
    { name: 'WORLD OF TANKS', key: 'wot' },
    { name: 'SMITE', key: 'smite' },
  ];

  public regions = [
    {
      key: 'csgo', values: [
        { name: 'EU', value: 'EU' },
        { name: 'US', value: 'US' },
        { name: 'SEA', value: 'SEA' },
        { name: 'OCEANIA', value: 'Oceania' },
        { name: 'SA', value: 'SA' }]
    },
    {
      key: 'tf2', values: [
        { name: 'EU', value: 'EU' },
        { name: 'US', value: 'US' },
        { name: 'SA', value: 'SA' }]
    },
    {
      key: 'overwatch', values: [
        { name: 'EU', value: 'EU' },
        { name: 'US', value: 'US' }]
    },
    {
      key: 'dota2', values: [
        { name: 'EU', value: 'EU' },
        { name: 'US', value: 'US' },
        { name: 'SEA', value: 'SEA' },
        { name: 'RU', value: 'RU' },
        { name: 'SA', value: 'SA' }]
    },
    {
      key: 'lol', values: [
        { name: 'EUW', value: 'EUW' },
        { name: 'EUN', value: 'EUNE' },
        { name: 'NA', value: 'NA' }]
    },
    {
      key: 'wot', values: [
        { name: 'EU', value: 'EU' },
        { name: 'NA', value: 'NA' },
        { name: 'RU', value: 'RU' }]
    },
    {
      key: 'smite', values: [
        { name: 'EU', value: 'EU' },
        { name: 'NA', value: 'NA' },
        { name: 'OCEANIA', value: 'Oceania' }]
    },
  ];
  constructor(
    private router: Router,
    public searchService: SearchService
  ) { }

  ngOnInit() {
    this.router.navigate(['']);
    this.selectedRegions = this.regions[0].values;
    this.searchService.selectedRegion = this.selectedRegions[0].value;
    this.searchService.selectedRegionLink = this.selectedRegions[0].value;
  }

  public setPage(navItem: string) {
    this.searchService.activePage = navItem;
    switch (navItem) {
      case this.navMenu[0]: {
        this.router.navigate(['']);
        this.searchService.TOPPlayers.length = 0;
        break;
      }
      case this.navMenu[1]: {
        this.router.navigate(['top100']);
        this.searchService.TOPPlayers.length = 0;
        break;
      }
      case this.navMenu[2]: {
        this.router.navigate(['compare-players']);
        this.searchService.TOPPlayers.length = 0;
        break;
      }
      case this.navMenu[3]: {
        this.router.navigate(['best-players-by-country']);
        this.searchService.TOPPlayers.length = 0;
        break;
      }
    }
  }

  public switchGame(game) {

    switch (game.key) {
      // CSGO
      case this.regions[0].key: {
        this.selectedRegions = this.regions[0].values;
        this.searchService.selectedGame = game.key;
        this.searchService.selectedGameURL = game.key;

        this.searchService.selectedRegion = this.regions[0].values[0].value;
        this.searchService.selectedRegionLink = this.regions[0].values[0].value;
        this.loadData();
        break;
      }
      // TF2
      case this.regions[1].key: {
        this.selectedRegions = this.regions[1].values;
        this.searchService.selectedGame = game.key;
        this.searchService.selectedGameURL = game.key;

        this.searchService.selectedRegion = this.regions[1].values[0].value;
        this.searchService.selectedRegionLink = this.regions[1].values[0].value;
        this.loadData();
        break;
      }
      // OVERWATCH
      case this.regions[2].key: {
        this.selectedRegions = this.regions[2].values;
        this.searchService.selectedGame = game.key;

        this.searchService.selectedRegion = this.regions[2].values[0].value;
        this.searchService.selectedRegionLink = this.regions[2].values[0].value;

        this.searchService.selectedGameURL = this.setGameURLForOverwatch(this.regions[2].values[0].value);

        this.loadData();
        break;
      }
      // DOTA2
      case this.regions[3].key: {
        this.selectedRegions = this.regions[3].values;
        this.searchService.selectedGame = game.key;
        this.searchService.selectedGameURL = game.key;

        this.searchService.selectedRegion = this.regions[3].values[0].value;
        this.searchService.selectedRegionLink = this.regions[3].values[0].value;
        this.loadData();
        break;
      }
      // LOL
      case this.regions[4].key: {
        this.selectedRegions = this.regions[4].values;
        this.searchService.selectedGame = game.key;

        this.searchService.selectedRegion = this.regions[4].values[0].value;
        this.searchService.selectedRegionLink = this.regions[4].values[0].value;

        this.searchService.selectedGameURL = this.setGameURLForLOL(this.regions[4].values[0].value);

        this.loadData();
        break;
      }
      // WORLD OF TANKS
      case this.regions[5].key: {
        this.selectedRegions = this.regions[5].values;
        this.searchService.selectedGame = game.key;

        this.searchService.selectedRegion = this.regions[5].values[0].value;
        this.searchService.selectedRegionLink = this.regions[5].values[0].value;

        this.searchService.selectedGameURL = this.setGameURLForWOT(this.regions[5].values[0].value);

        this.loadData();
        break;
      }
      // SMITE
      case this.regions[6].key: {
        this.selectedRegions = this.regions[6].values;
        this.searchService.selectedGame = game.key;
        this.searchService.selectedGameURL = game.key;

        this.searchService.selectedRegion = this.regions[6].values[0].value;
        this.searchService.selectedRegionLink = this.regions[6].values[0].value;
        this.loadData();
        break;
      }
    }


  }
  switchRegion(region) {
    this.searchService.selectedRegion = region.value;
    this.searchService.selectedRegionLink = region.value;
    if (this.searchService.selectedGame === 'overwatch') {
      this.searchService.selectedGameURL = this.setGameURLForOverwatch(region.value);
    }
    else if (this.searchService.selectedGame === 'lol') {
      this.searchService.selectedGameURL = this.setGameURLForLOL(region.value);
    }
    else if (this.searchService.selectedGame === 'wot') {
      this.searchService.selectedGameURL = this.setGameURLForWOT(region.value);
    }

    this.loadData();
  }

  loadData() {
    if (this.searchService.activePage === 'SEARCH') {
      const url = this.searchService.buildTOPURL(this.searchService.selectedGameURL, this.searchService.selectedRegionLink, 5);
      this.searchService.TOPPlayers.length = 0;
      this.searchService.getTOPPlayersByGame(url).subscribe(res => {
        this.searchService.TOPPlayers = res.payload;
        console.log(this.searchService.TOPPlayers);
      });
    }
    else if (this.searchService.activePage === 'TOP 100') {
      const url = this.searchService.buildTOPURL(this.searchService.selectedGameURL, this.searchService.selectedRegionLink, 100);
      this.searchService.TOPPlayers.length = 0;
      this.searchService.getTOPPlayersByGame(url).subscribe(res => {
        this.searchService.TOPPlayers = res.payload;
        console.log(this.searchService.TOPPlayers);
      });
    }
    else if (this.searchService.activePage === 'BEST PLAYERS BY COUNTRY') {
      console.log('a');
      const url = this.searchService.buildTopURLByCountry(this.searchService.selectedGameURL,
        this.searchService.selectedRegionLink, this.searchService.selectedCountry.toLowerCase(), 50);
      this.searchService.TOPPlayers.length = 0;
      this.searchService.getTOPPlayersByGame(url).subscribe(res => {
        this.searchService.TOPPlayers = res.payload;
        console.log(this.searchService.TOPPlayers);
      });
    }
  }

  setGameURLForOverwatch(regionKey: string) {
    if (regionKey === 'EU') {
      return 'overwatch_EU';
    }
    else if (regionKey === 'US') {
      return 'overwatch_US';
    }
  }

  setGameURLForLOL(regionKey: string) {
    if (regionKey === 'EUW') {
      return 'lol_EUW';
    }
    else if (regionKey === 'EUNE') {
      return 'lol_EUN';
    }
    else if (regionKey === 'NA') {
      return 'lol_NA';
    }
  }
  setGameURLForWOT(regionKey: string) {
    if (regionKey === 'EU') {
      return 'wot_EU';
    }
    else if (regionKey === 'RU') {
      return 'wot_RU';
    }
    else if (regionKey === 'NA') {
      return 'wot_NA';
    }
  }

  checkForPage() {
    if (this.searchService.activePage === 'player' ||
      this.searchService.activePage === 'team' ||
      this.searchService.activePage === 'tournament') {
      return false;
    }
    else {
      return true;
    }
  }
}
