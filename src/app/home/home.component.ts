import { Component } from '@angular/core';
import { partiteServices } from '../servizi/partiteService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  risultatiDefaultGame: any={};
  risultatiPartite: any=[];
  
  selectedSeason: string = '';
  seasons = [
    { period: '2023/2024', value: '2023/2024' },
    { period: '2022/2023', value: '2022/2023' },
  ];
 
  selectedLeague: string = '';
  leagues = [
    { name: 'SuperLega', value: 'SuperLega',id:97 },
    { name: 'A1 Maschile', value: 'A1_Maschile' },
    { name: 'A1 Femminile', value: 'A1_Femminile',id:89 }
  ];
  
  weeks: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Sostituisci con le settimane disponibili 


  requestBody = {
    "week": 10,
    "season": 2023,
    "id_league": 97 // 89 id league A1 Femminile
  };

  selectedGameId: number | null = null;

  ngOnInit() {
    this.defaultGameSuperLega()
    this.gamesList();
  }
  constructor(private partiteService: partiteServices,
              private router: Router) {}


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
    // Verifica se è stata selezionata una lega
    const selectedLeagueObj = this.leagues.find(league => league.value === this.selectedLeague);
  
    // Aggiorna l'id della lega in requestBody se è presente
    if (selectedLeagueObj && selectedLeagueObj.id) {
      this.requestBody.id_league = selectedLeagueObj.id; // Assicurati che ci sia una proprietà id nell'oggetto league
    }
  
    // Chiamata al servizio per ottenere i dati in base alla week e id_league selezionati
    this.partiteService.getGames(this.requestBody).subscribe((response: any) => {
      this.risultatiPartite = response;
      console.log("dati ricevuti", response);
    });
  }
  


  showGameDetail(gameId: number) {
    console.log("ID della partita selezionata:", gameId);
    this.selectedGameId = gameId;
    this.router.navigate(['/game', gameId]);
  }
}
  




