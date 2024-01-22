
/*
* Questo componente gestisce la visualizzazione dei risultati delle partite di pallavolo.
* Include funzionalità di filtraggio per stagione, lega e giornata.
*/

import { Component } from '@angular/core';
import { PartiteServices } from '../servizi/partiteService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Dati di default per la visualizzazione della partita principale (SuperLega)
  risultatiDefaultGame: any={};
 
  // Risultati delle partite da visualizzare
  risultatiPartite: any=[];

   // Opzioni per la selezione della stagione
  selectedSeason: number = -1;

  seasons = [
    { period: '2023/2024', value: 2023 },
    { period: '2022/2023', value: 2022 },
  ];
 
  // Opzioni per la selezione della lega
  selectedLeague: string = '';
  leagues = [
    { name: 'SuperLega', value: 'SuperLega',id:97 },
    { name: 'A2 Maschile', value: 'A2 Maschile',id:88 },
    { name: 'A2 Femminile', value: 'A2 Femminile', id:90 },
    { name: 'A1 Femminile', value: 'A1_Femminile',id:89 }
  ];
  

  // Settimane disponibili per il filtro
  weeks: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]; // 14 max SuperLega 16 max  A1 femminile

  // Corpo della richiesta per ottenere i dati delle partite
  requestBody = {
    "week": 14,
    "season": 2023,
    "id_league": 97 // 89 id league A1 Femminile 90 id league a2 Femminile 88 seria A1 Maschile
  };

  // ID della partita selezionata
  selectedGameId: number | null = null;

  ngOnInit() {
    this.defaultGameSuperLega()
    this.selectedSeason = 2023;
    this.gamesList();

  }
  constructor(private partiteService: PartiteServices,
              private router: Router) {}

  // Recupera i dati della partita di default per la SuperLega
  defaultGameSuperLega(){
    this.partiteService.getDefault().subscribe((response: any) => {
      this.risultatiDefaultGame = response;
      console.log("dati ricevuti",response);
    },
    );

  }

  // Recupera la lista delle partite in base alla richiesta corrente
  gamesList() {
    this.partiteService.getGames(this.requestBody).subscribe((response: any) => {
      this.risultatiPartite = response;
      console.log("dati ricevuti",response);
    },
    );

  }

  // Filtra i risultati in base alla settimana selezionata
  weekFilterResults() {
    // Verifica se è stata selezionata una lega
    const selectedLeagueObj = this.leagues.find(league => league.value === this.selectedLeague);
  
    // Aggiorna l'id della lega in requestBody se è presente
    if (selectedLeagueObj && selectedLeagueObj.id) {
      this.requestBody.id_league = selectedLeagueObj.id; // Assicurati che ci sia una proprietà id nell'oggetto league
    }
  
    // Verifica se è stata selezionata una stagione
    if (this.selectedSeason !== 0) {
      this.requestBody.season = this.selectedSeason;
  
      // Chiamata al servizio per ottenere i dati in base alla week, id_league e season selezionati
      this.partiteService.getGames(this.requestBody).subscribe((response: any) => {
        this.risultatiPartite = response;
        console.log("dati ricevuti", response);
      });
    }
  }
  
  

  // manda l'utente al componenente game-detail e mostra i dettagli della partita selezionata
  showGameDetail(gameId: number) {
    console.log("ID della partita selezionata:", gameId);
    this.selectedGameId = gameId;
    this.router.navigate(['/game', gameId]);
  }
}
  




