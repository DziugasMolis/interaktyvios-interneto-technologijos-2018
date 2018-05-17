import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navMenu = ['SEARCH', 'TOP 100', 'COMPARE PLAYERS', 'BEST PLAYERS BY COUNTRY'];
  public activePage = 'SEARCH';
  constructor(
    private router: Router

  ) { }

  ngOnInit() {
    this.router.navigate(['']);
  }

  public setPage(navItem: string) {
    this.activePage = navItem;
    switch (navItem) {
      case this.navMenu[0]: {
        this.router.navigate(['']);
          break;
      }
      case this.navMenu[1]: {
        this.router.navigate(['top100']);
        break;
      }
      case this.navMenu[2]: {
        this.router.navigate(['compare-players']);
        break;
      }
      case this.navMenu[3]: {
        this.router.navigate(['best-players-by-country']);
        break;
      }
    }
  }
}
