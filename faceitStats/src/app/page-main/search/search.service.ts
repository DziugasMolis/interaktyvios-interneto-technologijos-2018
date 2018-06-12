import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {


    public selectedGame = 'csgo';
    public selectedGameURL = 'csgo';
    public TOPPlayers = [];
    public selectedRegion = {};
    public selectedRegionLink = '';
    public activePage = 'SEARCH';

    public selectedSearchElement = {};

    public selectedCountry = '';

    private token = 'Bearer 587d356c-ce26-4a1e-b972-7ede8006866c';
    constructor(public http: HttpClient) { }


    public getTOPPlayersByGame(url: string): Observable<any> {
        return this.http.get(url); // (response => response.json());
    }

    public getTOPPlayersByCountry(url: string): Observable<any> {
        return this.http.get(url); // (response => response.json());
    }

    public buildTOPURL(gameURL: string, region: string, playersLimit: number) {
        return 'https://api.faceit.com/ranking/v1/globalranking/' + gameURL + '/' + region + '?limit=' + playersLimit + '&position=0';
    }

    public buildTopURLByCountry(gameURL: string, region: string, selectedCountry: string, playersLimit: number) {
        return 'https://api.faceit.com/ranking/v1/globalranking/' + gameURL + '/' +
            region + '?country=' + selectedCountry + '&limit=' + playersLimit + '&position=0';
    }
    public getCountry(country: string) {
        return 'flag-icon flag-icon-' + country;
    }

    public checkIfPlayerExists(username: string) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.token);
        const url = 'https://open.faceit.com/data/v4/players?nickname=' + username;
        return this.http.get(url, { headers: headers });
    }

    public getUserStatistics(playerID: string) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.token);
        const url = 'https://open.faceit.com/data/v4/players/' + playerID + '/stats/' + this.selectedGameURL;
        return this.http.get(url, { headers: headers });
    }

    public searchForTournament(input: string, gameURL: string, region: string, playersLimit: number) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.token);
        const url = 'https://open.faceit.com/data/v4/search/tournaments?name=' + input + '&game='
            + gameURL + '&region=' + region + '&type=upcoming&offset=0&limit=' + playersLimit;
        return this.http.get(url, { headers: headers });
    }

    public searchForPlayer(input: string) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.token);
        const url = 'https://open.faceit.com/data/v4/search/players?nickname=' + input + '&offset=0&limit=5';
        return this.http.get(url, { headers: headers });
    }

    public searchForTeam(input: string, gameURL: string) {
        const url = 'https://open.faceit.com/data/v4/search/teams?nickname='
            + input + '&game=' + gameURL + '&offset=0&limit=5';
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.token);
        return this.http.get(url, { headers: headers });
    }

    getTournamentInfo(tournamentId: string) {
        const url = 'https://open.faceit.com/data/v4/tournaments/' + tournamentId + '?expanded=';
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.token);
        return this.http.get(url, { headers: headers });
    }

    getRegistredTournamentTeams(tournamentId: string) {
        const url = 'https://open.faceit.com/data/v4/tournaments/' + tournamentId + '/teams?offset=0&limit=64';
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.token);
        return this.http.get(url, { headers: headers });
    }

    getTeamInfo(teamId: string) {
        const url = 'https://open.faceit.com/data/v4/teams/' + teamId;
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.token);
        return this.http.get(url, { headers: headers });
    }

    getTeamStats(teamId: string, gameURL: string) {
        const url = 'https://open.faceit.com/data/v4/teams/' + teamId + '/stats/' + gameURL;
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.token);
        return this.http.get(url, { headers: headers });
    }

    getPlayerData(playerId: string) {
        const url = 'https://open.faceit.com/data/v4/players/' + playerId;
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.token);
        return this.http.get(url, { headers: headers });
    }

    getPlayerStatsByGame(playerId: string, gameURL: string) {
        const url = 'https://open.faceit.com/data/v4/players/' + playerId + '/stats/' + gameURL;
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.token);
        return this.http.get(url, { headers: headers });
    }

    timeConverter(UNIX_timestamp) {
        const a = new Date(UNIX_timestamp * 1000);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const date = a.getDate();
        const hour = a.getHours();
        const min = '0' + a.getMinutes();
        const sec = '0' + a.getSeconds();
        const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }
}
