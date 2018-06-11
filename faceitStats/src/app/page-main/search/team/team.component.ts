import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public teamInfo = {};
  public teamStatistics = {};

  constructor(
    public searchService: SearchService
  ) { }

  ngOnInit() {
    console.log(this.searchService.selectedSearchElement);
    this.searchService.getTeamInfo(this.searchService.selectedSearchElement['team_id']).subscribe(teamData => {
      console.log(teamData);
      this.teamInfo = teamData;
    });

    // this.searchService.getTeamStats(this.searchService.selectedSearchElement['team_id'], this.searchService.selectedGameURL)
    //   .subscribe(teamStats => {
    //     console.log(teamStats);
    //     this.teamStatistics = teamStats;
    //   });
  }

}
