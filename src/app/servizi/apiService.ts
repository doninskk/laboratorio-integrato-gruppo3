/*
* Questo servizio fornisce metodi per effettuare richieste HTTP verso l'API del backend per diverse funzionalità dell'applicazione.
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}

  // Ottiene i risultati di default delle partite
  getRisultatiPartiteDefault() {
    return this.http.get('http://localhost:8080/game/default')
  }

  // Ottiene i risultati delle partite in base alla richiesta
  getRisultatiPartite(requestBody: any) {
    return this.http.post('http://localhost:8080/game/getGeneric', requestBody);
  }

  // Ottiene la lista delle squadre in base alla richiesta
  getTeamsList( requestBodyTeams: any) {
    return this.http.post('http://localhost:8080/team/getList',  requestBodyTeams);
  }

  getTeamsDetail( requestBodyId: any) {
    return this.http.post('http://localhost:8080/team/statistics',  requestBodyId);
  }

  // Ottiene la classifica in base alla richiesta
  getStandings( requestStandingBody: any) {
    return this.http.post('http://localhost:8080/league/standings',  requestStandingBody);
  }

  // Registra un nuovo utente
  userRegister(requestRegisterBody:any) {
    return this.http.post('http://localhost:8080/user/signup', requestRegisterBody);
  }

  // Effettua il login di un utente
  login(requestLoginBody:any) {
    return this.http.post('http://localhost:8080/user/login', requestLoginBody);
  }

  // Ottiene la pagina delle scommesse
  betPage() {
    return this.http.get('http://localhost:8080/game/betPage');
  }

  // Filtra le scommesse in base alla richiesta
  filterBet(requestBetBody:any){
    return this.http.post('http://localhost:8080/bet/betList',requestBetBody);
  }

  // Ottiene i dettagli di una partita in base all'ID
  gameDetail(id:any) {
    return this.http.post('http://localhost:8080/game/getSpecific', id);
  }

  // Ottiene la classifica degli utenti
  getUsersRank(){
    return this.http.get('http://localhost:8080/user/getRank')
  }

  // Salva una scommessa
  saveBet(userBody:any) {
    return this.http.post('http://localhost:8080/bet/save', userBody);
  }

  // Aggiorna il saldo delle monete di un utente
  updateCoins(coinsJson:any) {
    return this.http.post('http://localhost:8080/user/updateMoney', coinsJson);
  }
}
