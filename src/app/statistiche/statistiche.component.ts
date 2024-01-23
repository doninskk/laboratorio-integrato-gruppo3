/*
* Questo componente gestisce la visualizzazione delle classifiche delle squadre di pallavolo.
* Include la possibilità di selezionare la lega (maschile o femminile) per visualizzare la classifica corrispondente.
*/

import { Component } from '@angular/core';
import { PartiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-statistiche',
  templateUrl: './statistiche.component.html',
  styleUrls: ['./statistiche.component.css']
})
export class StatisticheComponent {

  // Array contenente la classifica delle squadre
  classifica: any=[];

  // Corpo della richiesta per ottenere i dati della classifica dalla API
  bodyClassifica = {
    "id_season": 2023,
    "id_league": 97,
    "id_group": 3
  };

  // Classifica della Serie A 2 Femminile da mock dati un po mancati nmell'API sports quindi realizzato un mock
  standingA2Femminile: any = [
    {
        "position": 1,
        "team": "Perugia W",
        "id": 704,
        "logo": "https://media.api-sports.io/volley/teams/709.png",
        "points": 49,
        "form": "WWWWW",
        "zona": "Promotion - Serie A2 Women (Winners stage: )"
    },
    {
      "position": 2,
      "team": "Futura Volley Giovani W",
      "id": 720,
      "logo": "https://media.api-sports.io/volley/teams/720.png",
      "points": 45,
      "form": "LWWLW",
      "zona": "Promotion - Serie A2 Women (Winners stage: )"
    },
    {
      "position": 3,
      "team": "Messina W",
      "id": 711,
      "logo": "https://media.api-sports.io/volley/teams/3518.png",
      "points": 40,
      "form": "WLWWW",
      "zona": "Promotion - Serie A2 Women (Winners stage: )"
    },

    {
      "position": 4,
      "team": "Talmassons W",
      "id": 736,
      "logo": "https://media.api-sports.io/volley/teams/736.png",
      "points": 34,
      "form": "LWLWW",
      "zona": "Promotion - Serie A2 Women (Winners stage: )"
    },

    {
      "position": 5,
      "team": "Albese W",
      "id": 703,
      "logo": "https://media.api-sports.io/volley/teams/715.png",
      "points": 30,
      "form": "LWWWW",
      "zona": "Promotion - Serie A2 Women (Winners stage: )"
    },

    {
      "position": 6,
      "team": "Brescia W",
      "id": 730,
      "logo": "https://media.api-sports.io/volley/teams/718.png",
      "points": 26,
      "form": "WLLLL",
      "zona": "Serie A2 Women (Losers stage: )"
    },

    {
      "position": 7,
      "team": "Bologna W",
      "id": 714,
      "logo": "https://media.api-sports.io/volley/teams/3747.png",
      "points": 19,
      "form": "LWWLW",
      "zona": "Serie A2 Women (Losers stage: )"
    },

    {
      "position": 8,
      "team": "Soverato W",
      "id": 706,
      "logo": "https://media.api-sports.io/volley/teams/735.png",
      "points": 15,
      "form": "WLLLL",
      "zona": "Serie A2 Women (Losers stage: )"
    },

    {
      "position": 9,
      "team": "Padova W",
      "id": 710,
      "logo": "https://media.api-sports.io/volley/teams/3750.png",
      "points": 11,
      "form": "WLWLL",
      "zona": "Serie A2 Women (Losers stage: )"
    },

    {
      "position": 10,
      "team": "Pescara W",
      "id": 713,
      "logo": "https://media.api-sports.io/volley/teams/3751.png",
      "points": 1,
      "form": "LLLLL",
      "zona": "Serie A2 Women (Losers stage: )"
    }
  ];

  // Opzioni per la selezione della lega
  selectedLeague: string = '';
  leagues = [
    { name: 'SuperLega', value: 'SuperLega', id: 97 },
    { name: 'A2 Maschile', value: 'A2_Maschile',id:88 },
    { name: 'A1 Femminile', value: 'A1_Femminile', id: 89 },
    { name: 'A2 Femminile', value: 'A2_Femminile',id:90 },
  ];

  ngOnInit() {
    this.selectedLeague = 'SuperLega'; // superLega di default
    this.standingsLeague();
  }

  constructor(private partiteService: PartiteServices) {}
  standingsLeague() {
    if (!this.selectedLeague) {
      // Se la lega non è selezionata, esci senza chiamare l'API
      return;
    }
  
    let leagueId;
  
    // Map per il nome della lega all'id della lega
    const selectedLeagueObj = this.leagues.find(league => league.value === this.selectedLeague);
  
    if (selectedLeagueObj) {
      leagueId = selectedLeagueObj.id;
    } else {
      // Se la lega selezionata non è riconosciuta, esci senza chiamare l'API
      console.error('Lega non riconosciuta:', this.selectedLeague);
      return;
    }
  
    // Aggiorna il corpo del JSON richiesto con l'id della lega
    this.bodyClassifica.id_league = leagueId;
  
    // Verifica se la lega selezionata è A1 Femminile e utilizzo il mock 
    if (this.selectedLeague === 'A2_Femminile') {
      this.classifica = this.standingA2Femminile;
    } else {
      // Altrimenti, chiamo l'API per ottenere i dati della lega selezionata
      this.partiteService.standings(this.bodyClassifica).subscribe((response: any) => {
        this.classifica = response;
        console.log("dati ricevuti", response);
      });
    }
  }
  
 
}
