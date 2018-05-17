import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {

    public games = [
        { name: 'CS:GO', url: 'csgo', index: 0 },
        { name: 'TF:2', url: 'tf2', index: 1 },
        { name: 'OVERWATCH EU', url: 'overwatch_EU', index: 2 },
        { name: 'DOTA2', url: 'dota2', index: 3 },
        { name: 'LOL EUW', url: 'lol_EUW', index: 4 },
        // { name: 'STARCRAFT:2', url:'', index: 5 },
        { name: 'WORLD OF TANKS EU', url: 'wot_EU', index: 6 },
        { name: 'SMITE', url: 'smite', index: 7 },
    ];
    public selectedGame = 0;
    public selectedGameURL = 'csgo';
    constructor(public http: HttpClient) { }


    public getTOPPlayersByGame(url: string): Observable<any> {

        return this.http.get(url); // (response => response.json());

    }

    public buildTOPURL(gameURL: string, playersLimit: number) {
        if (gameURL === 'lol_EUW') {
            return 'https://api.faceit.com/ranking/v1/globalranking/' + gameURL + '/EUW?limit=' + playersLimit + '&position=0';
        }

        else {
            return 'https://api.faceit.com/ranking/v1/globalranking/' + gameURL + '/EU?limit=' + playersLimit + '&position=0';
        }
    }
}
