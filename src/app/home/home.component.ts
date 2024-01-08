import { Component } from '@angular/core';
import { partiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  risultatiDefaultGame: any={};
  risultatiPartite: any=[];
  weeks: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Sostituisci con le settimane disponibili nel tuo contesto


  requestBody = {
    "week": 10,
    "season": 2023,
    "id_league": 97 // 89 id league A1 Femminile
  };

  /* = [
    {
      "id_game": 148403,
      "date": "2023-10-22",
      "time": "16:00:00",
      "status": "finished",
      "week": 1,
      "teams": [
        {
          "id_team": 741,
          "name": "Cisterna",
          "logo": "https://media-4.api-sports.io/volley/teams/741.png",
          "national": 0,
          "home": 1,
          "set": 2
        },
        {
          "id_team": 740,
          "name": "Trentino",
          "logo": "https://media-4.api-sports.io/volley/teams/740.png",
          "national": 0,
          "home": 0,
          "set": 3
        }
      ]
    },
    {
      "id_game": 148404,
      "date": "2023-10-22",
      "time": "13:45:00",
      "status": "finished",
      "week": 1,
      "teams": [
        {
          "id_team": 738,
          "name": "Modena",
          "logo": "https://media-4.api-sports.io/volley/teams/738.png",
          "national": 0,
          "home": 1,
          "set": 3
        },
        {
          "id_team": 742,
          "name": "Milano",
          "logo": "https://media-4.api-sports.io/volley/teams/742.png",
          "national": 0,
          "home": 0,
          "set": 2
        }
      ]
    },
    {
      "id_game": 148403,
      "date": "2023-10-22",
      "time": "16:00:00",
      "status": "finished",
      "week": 1,
      "teams": [
        {
          "id_team": 741,
          "name": "Cisterna",
          "logo": "https://media-4.api-sports.io/volley/teams/741.png",
          "national": 0,
          "home": 1,
          "set": 2
        },
        {
          "id_team": 740,
          "name": "Trentino",
          "logo": "https://media-4.api-sports.io/volley/teams/740.png",
          "national": 0,
          "home": 0,
          "set": 3
        }
      ]
    }
  ];*/
  
  


  /* defaultGame
   ngOnInit() {
    this.effettuaRicerca();
  }
  constructor(private partiteService: partiteServices) {}

  effettuaRicerca() {
    this.partiteService.getDefault().subscribe((response: any) => {
      this.risultatiPartite = response;
      console.log(response);
    });

  }
  */

  ngOnInit() {
    this.defaultGameSuperLega()
    this.gamesList();
  }
  constructor(private partiteService: partiteServices) {}


  defaultGameSuperLega(){
    this.partiteService.getDefault().subscribe((response: any) => {
      this.risultatiDefaultGame = response;
      console.log("dati ricevuti",response);
    },
    );

  }

  gamesList() {
    this.partiteService.getGames(this.requestBody).subscribe((response: any) => {
      this.risultatiPartite = response;
      console.log("dati ricevuti",response);
    },
    );

  }


  weekFilterResults() {
    // Chiamata al servizio per ottenere i dati in base alla week di campionato selezionata
    this.partiteService.getGames(this.requestBody).subscribe((response: any) => {
      this.risultatiPartite = response;
      console.log("dati ricevuti", response);
    });
  }
  
}
  




