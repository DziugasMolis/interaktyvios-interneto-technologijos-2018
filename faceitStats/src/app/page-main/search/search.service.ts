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

    constructor(public http: HttpClient) { }


    public getTOPPlayersByGame(url: string): Observable<any> {

        return this.http.get(url); // (response => response.json());

    }

    public buildTOPURL(gameURL: string, region: string, playersLimit: number) {
        return 'https://api.faceit.com/ranking/v1/globalranking/' + gameURL + '/' + region + '?limit=' + playersLimit + '&position=0';
    }

    public getCountry(country: string) {
        return 'flag-icon flag-icon-' + country;
    }
}
