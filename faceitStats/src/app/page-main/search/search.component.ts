import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public games = ['cs:go', 'TF:2', 'Overwatch', 'Dota2', 'LOL', 'Starcraft 2', 'World of Tanks', 'Smite'];
  constructor() { }

  ngOnInit() {
  }

}
