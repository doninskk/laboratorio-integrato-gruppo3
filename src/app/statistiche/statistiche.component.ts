import { Component } from '@angular/core';
import { partiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-statistiche',
  templateUrl: './statistiche.component.html',
  styleUrls: ['./statistiche.component.css']
})
export class StatisticheComponent {

  classifica: any=[];

  bodyClassifica = {
    "id_season": 2023,
    "id_league": 97,
    "id_group": 3
  };

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
      "id": 704,
      "logo": "https://media.api-sports.io/volley/teams/3604.png",
      "form": "WWWWW",
      "zona": "Promotion - Serie A1 Women (Play Offs: Quarter-finals)"
    }
  ];

  selectedLeague: string = '';
  leagues = [
    { name: 'SuperLega', value: 'SuperLega', id: 97 },
    { name: 'A1 Maschile', value: 'A1_Maschile' },
    { name: 'A1 Femminile', value: 'A1_Femminile', id: 89 }
  ];

  ngOnInit() {
    this.standingsLeague();
  }

  constructor(private partiteService: partiteServices) {}

  standingsLeague() {
    // Verifica se la lega selezionata è femminile (id 89) e imposta i dati di mock appropriati
    if (this.selectedLeague === 'A1_Femminile') {
      this.classifica = this.standingA1Femminile;
    } else {
      // Altrimenti, chiamare l'API per ottenere i dati della lega selezionata
      this.partiteService.standings(this.bodyClassifica).subscribe((response: any) => {
        this.classifica = response;
        console.log("dati ricevuti", response);
      });
    }
  }
}
