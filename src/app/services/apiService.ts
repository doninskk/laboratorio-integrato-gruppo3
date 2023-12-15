
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // importo qui quindi in serieService non serve perchè importo questo file

    @Injectable({

     providedIn: 'root',

    })

    export class apiService {

        constructor(private http: HttpClient) {}

        getRisultatiPartite() {
            return this.http.get('')} 
        
    /*    GetEpisodes( idSerie: number){
            return this.http.get('https://api.tvmaze.com/shows/'+idSerie+'/episodes')} // concateno l'URL con l'ID*/
        }
    