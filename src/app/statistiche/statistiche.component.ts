import { Component } from '@angular/core';
import { partiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-statistiche',
  templateUrl: './statistiche.component.html',
  styleUrls: ['./statistiche.component.css']
})
export class StatisticheComponent {

  classifica: any=[];

bodyClassifica=
  {
    "id_season":2023,
   "id_league":97,
    "id_group":3
}
  standingA1Femminile: any= [
  [
    {
      "position": 1,
      "stage": "Serie A1 Women",
      "group": {
        "name": "Regular Season"
      },
      "team": {
        "id": 704,
        "name": "Conegliano W",
        "logo": "https://media.api-sports.io/volley/teams/704.png"
      },
      "games": {
        "played": 15,
      "points": 44,
      "form": "WWWWW",
      "description": "Promotion - Serie A1 Women (Play Offs: Quarter-finals)"
    }
  }
  ]
]
ngOnInit() {


  this.standingsLeague()
}
constructor(private partiteService: partiteServices) {}

standingsLeague(){
  this.partiteService.standings(this.bodyClassifica).subscribe((response: any) => {
    this.classifica = response;
    console.log("dati ricevuti",response);
  },
  );

}


}
