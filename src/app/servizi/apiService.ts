
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

  betPage() {
    return this.http.get('http://localhost:8080/game/betPage');
  }

  gameDetail(id:any) {
    return this.http.post('http://localhost:8080/game/getSpecific', id);
  }


}
