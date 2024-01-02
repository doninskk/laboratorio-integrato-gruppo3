import { Injectable } from '@angular/core';
import { ApiService } from './apiService';

    @Injectable({

     providedIn: 'root', 

    })

    export class partiteServices{

        constructor(private apiService:ApiService ) {}
        getDefault(){
            
              return this.apiService.getRisultatiPartiteDefault();
        }

        getGames(requestBody:any){

            return this.apiService.getRisultatiPartite(requestBody);
        }
        }