import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navMenu = ['SEARCH', 'TOP 100', 'COMPARE PLAYERS', 'BEST PLAYERS BY COUNTRY'];
  public activePage = 'SEARCH';
  constructor(public headerService: HeaderService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  public setPage(navItem: string) {
    console.log(navItem);
    this.activePage = navItem;
    switch (navItem) {
      case this.navMenu[0]: {
        console.log(navItem);
        this.router.navigate(['']);
          break;
      }
      case this.navMenu[1]: {
        console.log(navItem);
        this.router.navigate(['top100']);
        break;
      }
      case this.navMenu[2]: {
        console.log(navItem);
        this.router.navigate(['compare-players']);
        break;
      }
      case this.navMenu[3]: {
        console.log(navItem);
        this.router.navigate(['best-players-by-country']);
        break;
      }
    }
  }
}


/* const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'top100', component: Top100Component },
  { path: 'compare-players', component: ComparePlayersComponent },
  { path: 'best-players-by-country', component: BestPlayersByCountryComponent },
]; */