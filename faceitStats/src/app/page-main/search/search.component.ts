import { Router } from '@angular/router';
import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput: string;
  searchType = 'player';
  searchValues: Array<string> = [];
  constructor(
    private router: Router,
    public searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.getTOPPlayersByGame(
      this.searchService.buildTOPURL(this.searchService.selectedGameURL, this.searchService.selectedRegionLink, 5)
    )
      .subscribe(res => {
        this.searchService.TOPPlayers = res.payload;
        console.log(this.searchService.TOPPlayers);
      });
  }

  public redirectToPlayerPage(playerInfo: any) {
    window.location.replace('https://www.faceit.com/en/players/' + playerInfo.user.nickname);
  }

  goToTOP100() {
    this.router.navigate(['top100']);
    this.searchService.activePage = 'TOP 100';
    document.documentElement.scrollTop = 0;
  }

  search(inputValue: string) {
    if (!this.searchInput) {
      this.searchValues.length = 0;
    }
    else if (this.searchType === 'player') {
      this.searchService.searchForPlayer(inputValue).subscribe(playerData => {
        console.log(playerData);
        this.searchValues = playerData['items'];
      });
    }
    else if (this.searchType === 'team') {
      this.searchService.searchForTeam(inputValue, this.searchService.selectedGameURL).subscribe(teamData => {
        this.searchValues = teamData['items'];
      });
    }
    else if (this.searchType === 'tournament') {
      this.searchService.searchForTournament(inputValue, this.searchService.selectedGameURL, this.searchService.selectedRegionLink, 5)
        .subscribe(data => {
          console.log(data);
          this.searchValues = data['items'];
        });
    }

  }
  searchOptionChange(selectSearchType: string) {
    this.searchType = selectSearchType;
    this.searchInput = '';
    this.searchValues.length = 0;
  }


  routeToPlayer(selectedPlayer: {}) {
    this.searchService.selectedSearchElement = selectedPlayer;
    this.searchService.activePage = 'player';
    this.router.navigate(['player']);
  }


  routeToTeam(selectedTeam: {}) {
    this.searchService.selectedSearchElement = selectedTeam;
    this.searchService.activePage = 'team';
    this.router.navigate(['team']);
  }


  routeToTournament(selectedTournament: {}) {
    this.searchService.selectedSearchElement = selectedTournament;
    this.searchService.activePage = 'tournament';
    this.router.navigate(['tournament']);
  }

  selectFirstSearchElement(selectedValue: {}) {
    if (selectedValue) {
      if (this.searchType === 'player') {
        this.routeToPlayer(selectedValue);
      }
      else if (this.searchType === 'team') {
        this.routeToTeam(selectedValue);
      }
      else if (this.searchType === 'tournament') {
        this.routeToTournament(selectedValue);
      }
    }
    else {
      alert('Search for more specific name');
    }
  }
}
