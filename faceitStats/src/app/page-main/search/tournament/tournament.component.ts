import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  tournamentData = {};
  teamsNames = [];
  teamsSkillLevel = [];
  constructor(
    public searchService: SearchService
  ) { }

  ngOnInit() {
    console.log(this.searchService.selectedSearchElement);
    this.searchService.getTournamentInfo(this.searchService.selectedSearchElement['competition_id'])
      .subscribe(tournament => {
        // console.log(tournament);
        this.tournamentData = tournament;
      });
    this.searchService.getRegistredTournamentTeams(this.searchService.selectedSearchElement['competition_id']).subscribe(joinedTeams => {
      console.log(joinedTeams);
      this.teamsNames = joinedTeams['joined'].map(obj => {
        return obj['nickname'];
      });
      this.teamsSkillLevel = joinedTeams['joined'].map(obj => {
        return obj['skill_level'];
      });
    });
  }


  anticheat(value: boolean) {
    if (value) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
}
