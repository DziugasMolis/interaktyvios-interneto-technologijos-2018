import { Router } from '@angular/router';
import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


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
}
