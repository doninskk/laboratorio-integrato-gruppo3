import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  


  risultatiPartite = [
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
  ];
}
  




