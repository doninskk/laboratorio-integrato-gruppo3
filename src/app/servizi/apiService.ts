
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getRisultatiPartiteDefault() {
    return this.http.get('http://localhost:8080/game/default')
  }

  getRisultatiPartite(requestBody: any) {
    return this.http.post('http://localhost:8080/game/getGeneric', requestBody);
  }

  getTeamsList( requestBodyTeams: any) {
    return this.http.post('http://localhost:8080/team/getList',  requestBodyTeams);
  }

  getTeamsDetail( requestBodyId: any) {
    return this.http.post('http://localhost:8080/team/statistics',  requestBodyId);
  }

  getStandings( requestStandingBody: any) {
    return this.http.post('http://localhost:8080/league/standings',  requestStandingBody);
  }

  userRegister(requestRegisterBody:any) {
    return this.http.post('http://localhost:8080/user/signup', requestRegisterBody);
  }

  login(requestLoginBody:any) {
    return this.http.post('http://localhost:8080/user/login', requestLoginBody);
  }

  betPage() {
    return this.http.get('http://localhost:8080/game/betPage');
  }

  filterBet(requestBetBody:any){
    return this.http.post('http://localhost:8080/bet/betList',requestBetBody);
  }

  gameDetail(id:any) {
    return this.http.post('http://localhost:8080/game/getSpecific', id);
  }

  getUsersRank(){
    return this.http.get('http://localhost:8080/user/getRank')
  }


}
