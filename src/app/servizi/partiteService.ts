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

        teamsList(requestBodyTeams: any){
            return this.apiService.getTeamsList(requestBodyTeams);

        }

        detailTeam(requestBodyId:any){
            return this.apiService.getTeamsDetail(requestBodyId);

        }

        standings(requestBodyStandings:any){
            return this.apiService.getStandings(requestBodyStandings);

        }

        subscribeUser(requestSubBody:any){
          return this.apiService.userRegister(requestSubBody)
        }

        userLogin(requestLogBody:any){
          return this.apiService.login(requestLogBody)
        }

          betPageResults(){

            return this.apiService.betPage();

          }

          filterForBets(requestBetBody:any){
            return this.apiService.filterBet(requestBetBody)
          }
          
          
          getGameDetail(id:any){
            return this.apiService.gameDetail(id);
          }

          getUsersPositions(){
            return this.apiService.getUsersRank();
          }

          getSaveBets(user:any){
            return this.apiService.saveBet(user)
          }

          getCoins(coins:any){
            return this.apiService.updateCoins(coins)

          }

        }