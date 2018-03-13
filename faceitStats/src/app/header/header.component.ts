import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public number = [1, 2, 3, 4, 5];

  constructor(    public headerService: HeaderService

  ) { }

  ngOnInit() {
  }

}
