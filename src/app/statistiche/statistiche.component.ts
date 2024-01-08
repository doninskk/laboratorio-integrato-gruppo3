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

  /*
   classifica =  [

    {
      position: 1,
      stage: "Esiliiga - Regular Season",
      group: {
      name: "Regular Season",
      },
      team: {
      id: 444,
      name: "Tallin University",
      logo: "https://media-4.api-sports.io/volley/teams/444.png",
      },
      league: {
      id: 56,
      name: "Esiliiga",
      type: "League",
      logo: "https://media-4.api-sports.io/volley/leagues/56.png",
      season: 2020,
      },
      country: {
      id: 16,
      name: "Estonia",
      code: "EE",
      flag: "https://media-4.api-sports.io/flags/ee.svg",
      },
      games: {
      played: 11,
      win: {
      total: 11,
      percentage: "100.00",
      },
      lose: {
      total: 0,
      percentage: "0.00",
      },
      },
      goals: {
      for: 33,
      against: 2
      },
      points: 33,
      form: "WWWWW",
      description: "Promotion - Esiliiga (Winners stage)"
      },
      {
      position: 2,
      stage: "Esiliiga - Regular Season",
      group: {
      name: "Regular Season",
      },
      team: {
      id: 442,
      name: "Rakvere",
      logo: "https://media-4.api-sports.io/volley/teams/442.png",
      },
      league: {
      id: 56,
      name: "Esiliiga",
      type: "League",
      logo: "https://media-4.api-sports.io/volley/leagues/56.png",
      season: 2020,
      },
      country: {
      id: 16,
      name: "Estonia",
      code: "EE",
      flag: "https://media-4.api-sports.io/flags/ee.svg",
      },
      games: {
      played: 11,
      win: {
      total: 8,
      percentage: "72.73"
      },
      lose: {
      total: 3,
      percentage: "27.27"
      }
      },
      goals: {
      for: 26,
      against: 16
      },
      points: 24,
      form: "LWWWW",
      description: "Promotion - Esiliiga (Winners stage)"
      },
      {
      position: 3,
      stage: "Esiliiga - Regular Season",
      group: {
      name: "Regular Season"
      },
      team: {
      id: 447,
      name: "Viljandi",
      logo: "https://media-4.api-sports.io/volley/teams/447.png"
      },
      league: {
      id: 56,
      name: "Esiliiga",
      type: "League",
      logo: "https://media-4.api-sports.io/volley/leagues/56.png",
      season: 2020
      },
      country: {
      id: 16,
      name: "Estonia",
      code: "EE",
      flag: "https://media-4.api-sports.io/flags/ee.svg",
      },
      games: {
      played: 11,
      win: {
      total: 8,
      percentage: "72.73"
      },
      lose: {
      total: 3,
      percentage: "27.27"
      },
      },
      goals: {
      for: 26,
      against: 18
      },
      points: 22,
      form: "WWWLW",
      description: "Promotion - Esiliiga (Winners stage)"
      },
      {
      position: 4,
      stage: "Esiliiga - Regular Season",
      group: {
      name: "Regular Season"
      },
      team: {
      id: 436,
      name: "Eesti Maaulikooli",
      logo: "https://media-4.api-sports.io/volley/teams/436.png"
      },
      league: {
      id: 56,
      name: "Esiliiga",
      type: "League",
      logo: "https://media-4.api-sports.io/volley/leagues/56.png",
      season: 2020
      },
      country: {
      id: 16,
      name: "Estonia",
      code: "EE",
      flag: "https://media-4.api-sports.io/flags/ee.svg"
      },
      games: {
      played: 11,
      win: {
      total: 7,
      percentage: "63.64"
      },
      lose: {
      total: 4,
      percentage: "36.36"
      },
      },
      goals: {
      for: 27,
      against: 19
      },
      points: 22,
      form: "WLLWL",
      description: "Promotion - Esiliiga (Winners stage)"
      },
      {
      position: 5,
      stage: "Esiliiga - Regular Season",
      group: {
      name: "Regular Season"
      },
      team: {
      id: 440,
      name: "Neemeco",
      logo: "https://media-4.api-sports.io/volley/teams/440.png"
      },
      league: {
      id: 56,
      name: "Esiliiga",
      type: "League",
      logo: "https://media-4.api-sports.io/volley/leagues/56.png",
      season: 2020
      },
      country: {
      id: 16,
      name: "Estonia",
      code: "EE",
      flag: "https://media-4.api-sports.io/flags/ee.svg"
      },
      games: {
      played: 11,
      win: {
      total: 6,
      percentage: "54.55"
      },
      lose: {
      total: 5,
      percentage: "45.45"
      },
      },
      goals: {
      for: 24,
      against: 18
      },
      points: 20,
      form: "LWLWL",
      description: "Promotion - Esiliiga (Winners stage)"
      },
      {
      position: 6,
      stage: "Esiliiga - Regular Season",
      group: {
      name: "Regular Season"
      },
      team: {
      id: 438,
      name: "Kiili",
      logo: "https://media-4.api-sports.io/volley/teams/438.png"
      },
      league: {
      id: 56,
      name: "Esiliiga",
      type: "League",
      logo: "https://media-4.api-sports.io/volley/leagues/56.png",
      season: 2020
      },
      country: {
      id: 16,
      name: "Estonia",
      code: "EE",
      flag: "https://media-4.api-sports.io/flags/ee.svg"
      },
      games: {
      played: 11,
      win: {
      total: 6,
      percentage: "54.55"
      },
      lose: {
      total: 5,
      percentage: "45.45"
      },
      },
      goals: {
      for: 22,
      against: 19,
      },
      points: 17,
      form: "WWWWW",
      description: "Promotion - Esiliiga (Winners stage)"
      },
      {
      position: 7,
      stage: "Esiliiga - Regular Season",
      group: {
      name: "Regular Season"
      },
      team: {
      id: 446,
      name: "Valio Voru",
      logo: "https://media-4.api-sports.io/volley/teams/446.png"
      },
      league: {
      id: 56,
      name: "Esiliiga",
      type: "League",
      logo: "https://media-4.api-sports.io/volley/leagues/56.png",
      season: 2020
      },
      country: {
      id: 16,
      name: "Estonia",
      code: "EE",
      flag: "https://media-4.api-sports.io/flags/ee.svg"
      },
      games: {
      played: 11,
      win: {
      total: 6,
      percentage: "54.55"
      },
      lose: {
      total: 5,
      percentage: "45.45"
      }
      },
      goals: {
      for: 23,
      against: 21
      },
      points: 17,
      form: "LLLWL",
      description: "Esiliiga (Losers stage)"
      },
      {
      position: 8,
      stage: "Esiliiga - Regular Season",
      group: {
      name: "Regular Season"
      },
      team: {
      id: 443,
      name: "Saaremaa 2",
      logo: "https://media-4.api-sports.io/volley/teams/443.png"
      },
      league: {
      id: 56,
      name: "Esiliiga",
      type: "League",
      logo: "https://media-4.api-sports.io/volley/leagues/56.png",
      season: 2020
      },
      country: {
      id: 16,
      name: "Estonia",
      code: "EE",
      flag: "https://media-4.api-sports.io/flags/ee.svg"
      },
      games: {
      played: 11,
      win: {
      total: 5,
      percentage: "45.45"
      },
      lose: {
      total: 6,
      percentage: "54.55"
      }
      },
      goals: {
      for: 19,
      against: 21
      },
      points: 14,
      form: "LWWLW",
      description: "Esiliiga (Losers stage)",
      },
      {
      position: 9,
      stage: "Esiliiga - Regular Season",
      group: {
      name: "Regular Season"
      },
      team: {
      id: 445,
      name: "Tallinn II",
      logo: "https://media-4.api-sports.io/volley/teams/445.png"
      },
      league: {
      id: 56,
      name: "Esiliiga",
      type: "League",
      logo: "https://media-4.api-sports.io/volley/leagues/56.png",
      season: 2020
      },
      country: {
      id: 16,
      name: "Estonia",
      code: "EE",
      flag: "https://media-4.api-sports.io/flags/ee.svg"
      },
      games: {
      played: 11,
      win: {
      total: 5,
      percentage: "45.45"
      },
      lose: {
      total: 6,
      percentage: "54.55"
      }
      },
      goals: {
      for: 17,
      against: 24
      },
      points: 13,
      form: "WWWWL",
      description: "Esiliiga (Losers stage)"
      },
      {
      position: 10,
      stage: "Esiliiga - Regular Season",
      group: {
      name: "Regular Season"
      },
      team: {
      id: 439,
      name: "Liider",
      logo: "https://media-4.api-sports.io/volley/teams/439.png"
      },
      league: {
      id: 56,
      name: "Esiliiga",
      type: "League",
      logo: "https://media-4.api-sports.io/volley/leagues/56.png",
      season: 2020,
      },
      country: {
      id: 16,
      name: "Estonia",
      code: "EE",
      flag: "https://media-4.api-sports.io/flags/ee.svg"
      },
      games: {
      played: 11,
      win: {
      total: 2,
      percentage: "18.18"
      },
      lose: {
      total: 9,
      percentage: "81.82"
      },
      },
      goals: {
      for: 11,
      against: 28
      },
      points: 7,
      form: "LLLLL",
      description: "Esiliiga (Losers stage)",
      },
     
    

  ]*/

}
