import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  risultatiPartite = [
    {
      id: 23,
      date: "2021-02-08T00:00:00+00:00",
      time: "00:00",
      timestamp: 1612742400,
      timezone: "UTC",
      week: "2",
      status: {
        long: "Finished",
        short: "FT"
      },
      country: {
        id: 1,
        name: "Argentina",
        code: "AR",
        flag: "https://media-4.api-sports.io/flags/ar.svg"
      },
      league: {
        id: 3,
        name: "Liga Women",
        type: "League",
        logo: "https://media-4.api-sports.io/volley/leagues/3.png",
        season: 2021
      },
      teams: {
        home: {
          id: 24,
          name: "Velez Sarsfield W",
          logo: "https://media-4.api-sports.io/volley/teams/24.png"
        },
        away: {
          id: 20,
          name: "Mupol W",
          logo: "https://media-4.api-sports.io/volley/teams/20.png"
        }
      },
      scores: {
        home: 2,
        away: 3
      },
      periods: {
        first: {
          home: 26,
          away: 24
        },
        second: {
          home: 25,
          away: 16
        },
        third: {
          home: 23,
          away: 25
        },
        fourth: {
          home: 23,
          away: 25
        },
        fifth: {
          home: 14,
          away: 16
        }
      }
    }
  ];


}
