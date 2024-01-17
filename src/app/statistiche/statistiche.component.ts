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

  // Corpo della richiesta per ottenere i dati della classifica
  bodyClassifica = {
    "id_season": 2023,
    "id_league": 97,
    "id_group": 3
  };

  // Classifica della Serie A Femminile (A1 Femminile)
  standingA1Femminile: any = [
    {
        "position": 1,
        "team": "Conegliano W",
        "id": 704,
        "logo": "https://media.api-sports.io/volley/teams/704.png",
        "points": 44,
        "form": "WWWWW",
        "zona": "Promotion - Serie A1 Women (Play Offs: Quarter-finals)"
    },
    {
      "position": 2,
      "team": "Vero Volley W",
      "id": 3604,
      "logo": "https://media.api-sports.io/volley/teams/3604.png",
      "points": 40,
      "form": "WWWWW",
      "zona": "Promotion - Serie A1 Women (Play Offs: Quarter-finals)"
    },
    {
      "position": 3,
      "team": "Scandicci W",
      "id": 711,
      "logo": "https://media.api-sports.io/volley/teams/711.png",
      "points": 38,
      "form": "WWWWW",
      "zona": "Promotion - Serie A1 Women (Play Offs: Quarter-finals)"
    },

    {
      "position": 4,
      "team": "Novara W",
      "id": 708,
      "logo": "https://media.api-sports.io/volley/teams/708.png",
      "points": 33,
      "form": "WWWLL",
      "zona": "Promotion - Serie A1 Women (Play Offs: Quarter-finals)"
    },

    {
      "position": 5,
      "team": "Chieri 76 W",
      "id": 703,
      "logo": "https://media.api-sports.io/volley/teams/703.png",
      "points": 28,
      "form": "WLWWL",
      "zona": "Promotion - Serie A1 Women (Play Offs: Quarter-finals)"
    },

    {
      "position": 6,
      "team": "Pinerolo W",
      "id": 730,
      "logo": "https://media.api-sports.io/volley/teams/730.png",
      "points": 21,
      "form": "LLWLW",
      "zona": "Promotion - Serie A1 Women (Play Offs: Quarter-finals)"
    },

    {
      "position": 7,
      "team": "Vallefoglia W",
      "id": 714,
      "logo": "https://media.api-sports.io/volley/teams/714.png",
      "points": 21,
      "form": "WWLWL",
      "zona": "Promotion - Serie A1 Women (Play Offs: Quarter-finals)"
    },

    {
      "position": 8,
      "team": "Firenze W",
      "id": 706,
      "logo": "https://media.api-sports.io/volley/teams/706.png",
      "points": 19,
      "form": "WLWLW",
      "zona": "Promotion - Serie A1 Women (Play Offs: Quarter-finals)"
    },

    {
      "position": 9,
      "team": "Roma W",
      "id": 710,
      "logo": "https://media.api-sports.io/volley/teams/710.png",
      "points": 18,
      "form": "LLLLW",
      "zona": "Serie A1 Women (Play Out: )"
    },

    {
      "position": 10,
      "team": "UYBA Busto Arsizio W",
      "id": 713,
      "logo": "https://media.api-sports.io/volley/teams/713.png",
      "points": 14,
      "form": "LLLWW",
      "zona": "Serie A1 Women (Play Out: )"
    },

    {
      "position": 11,
      "team": "Cuneo W",
      "id": 705,
      "logo": "https://media.api-sports.io/volley/teams/705.png",
      "points": 13,
      "form": "LWLLL",
      "zona": "Serie A1 Women (Play Out: )"
    },

    {
      "position": 12,
      "team": "Bergamo W",
      "id": 701,
      "logo": "https://media.api-sports.io/volley/teams/701.png",
      "points": 11,
      "form": "LWLLL",
      "zona": "Serie A1 Women (Play Out: )"
    },

    {
      "position": 13,
      "team": "Casalmaggiore W",
      "id": 702,
      "logo": "https://media.api-sports.io/volley/teams/702.png",
      "points": 9,
      "form": "LLLLL",
      "zona": "Relegation - Serie A2 Women"
    },

    {
      "position": 14,
      "team": "Trentino W",
      "id": 712,
      "logo": "https://media.api-sports.io/volley/teams/712.png",
      "points": 3,
      "form": "LLLLL",
      "zona": "Serie A1 Women (Play Out: )"
    },

  ];

  // Opzioni per la selezione della lega
  selectedLeague: string = '';
  leagues = [
    { name: 'SuperLega', value: 'SuperLega', id: 97 },
    { name: 'A1 Maschile', value: 'A1_Maschile' },
    { name: 'A1 Femminile', value: 'A1_Femminile', id: 89 }
  ];

  ngOnInit() {
    this.standingsLeague();
  }

  constructor(private partiteService: PartiteServices) {}

  // Ottiene e visualizza la classifica in base alla lega selezionata
  standingsLeague() {
    // Verifica se la lega selezionata è femminile (id 89) e visualizzo il JSON
    if (this.selectedLeague === 'A1_Femminile') {
      this.classifica = this.standingA1Femminile;
    } else {
      // Altrimenti, chiamo l'API per ottenere i dati della lega selezionata
      this.partiteService.standings(this.bodyClassifica).subscribe((response: any) => {
        this.classifica = response;
        console.log("dati ricevuti", response);
      });
    }
  }
}
