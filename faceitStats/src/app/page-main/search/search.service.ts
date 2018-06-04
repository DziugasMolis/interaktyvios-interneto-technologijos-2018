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
        let url = 'https://open.faceit.com/data/v4/players?nickname=' + username;
        return this.http.get(url, { headers: headers });
    }

    public getUserStatistics(playerID: string) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.token);
        let url = 'https://open.faceit.com/data/v4/players/' + playerID + '/stats/' + this.selectedGameURL;
        return this.http.get(url, { headers: headers });
    }
}
