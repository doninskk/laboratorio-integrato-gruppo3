import { Injectable } from '@angular/core';
import { ApiService } from './apiService';

@Injectable({
  providedIn: 'root',
})
export class PartiteServices {
  constructor(private apiService: ApiService) {}

  // Ottiene i risultati di default delle partite
  getDefault() {
    return this.apiService.getRisultatiPartiteDefault();
  }

  // Ottiene i risultati delle partite in base alla richiesta
  getGames(requestBody: any) {
    return this.apiService.getRisultatiPartite(requestBody);
  }

  // Ottiene la lista delle squadre in base alla richiesta
  teamsList(requestBodyTeams: any) {
    return this.apiService.getTeamsList(requestBodyTeams);
  }

  // Ottiene i dettagli di una squadra in base alla richiesta
  detailTeam(requestBodyId: any) {
    return this.apiService.getTeamsDetail(requestBodyId);
  }

  // Ottiene la classifica in base alla richiesta
  standings(requestBodyStandings: any) {
    return this.apiService.getStandings(requestBodyStandings);
  }

  // Registra un nuovo utente
  subscribeUser(requestSubBody: any) {
    return this.apiService.userRegister(requestSubBody);
  }

  // Effettua il login di un utente
  userLogin(requestLogBody: any) {
    return this.apiService.login(requestLogBody);
  }

  // Ottiene la pagina delle scommesse
  betPageResults() {
    return this.apiService.betPage();
  }

  // Filtra le scommesse in base alla richiesta
  filterForBets(requestBetBody: any) {
    return this.apiService.filterBet(requestBetBody);
  }

  // Ottiene i dettagli di una partita in base all'ID
  getGameDetail(id: any) {
    return this.apiService.gameDetail(id);
  }

  // Ottiene la classifica degli utenti
  getUsersPositions() {
    return this.apiService.getUsersRank();
  }

  // Salva una scommessa
  getSaveBets(user: any) {
    return this.apiService.saveBet(user);
  }

  // Aggiorna il saldo delle monete di un utente
  getCoins(coins: any) {
    return this.apiService.updateCoins(coins);
  }

  getAllBets(token:any){
    return this.apiService.getAllUserBets(token);
  }
}
