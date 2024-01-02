
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getRisultatiPartiteDefault() {
    return this.http.get('http://localhost:8080/game/default', { withCredentials: true })
  }

  getRisultatiPartite(requestBody: any) {
    return this.http.post('http://localhost:8080/game/getGeneric', requestBody, { withCredentials: true });
  }
}
