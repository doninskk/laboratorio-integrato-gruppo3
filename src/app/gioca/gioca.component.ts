import { Component } from '@angular/core';
import { PartiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-gioca',
  templateUrl: './gioca.component.html',
  styleUrls: ['./gioca.component.css']
})
export class GiocaComponent {
  bets: any = [];
  users: any = [];
  savedBets: any = [];

  betBodySave = {
    "token": "",
    "id_team": 0, // dichiarazione iniziale a 0 per poi salvare i dati al click sull'icona
    "id_game": 0
  };

  maxDisplayedGames: number = 100; // Imposta un valore predefinito

  // Metodo per aggiornare il numero massimo di partite visualizzate
  updateMaxDisplayedGames(value: number) {
    this.maxDisplayedGames = value;
    this.betsData(); // Richiama la funzione per aggiornare i dati con il nuovo numero di partite
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    console.log(token)

    if (token) {
      this.betBodySave.token = token;
    }
    this.betsData();
    this.userRank();
    this.savedUserBets();
  }

  constructor(private partiteService: PartiteServices) {}

  // Al click sull'icona, chiamata questa funzione con i nuovi valori dell'id_team e id_game
  setBetBody(teamId: number, gameId: number) {
    // Modifica il corpo della scommessa corrente
    this.betBodySave = {
      ...this.betBodySave,
      "id_team": teamId,
      "id_game": gameId
    };

    // Chiamata API per salvare la scommessa
    this.partiteService.getSaveBets(this.betBodySave).subscribe(
      (response: any) => {
        console.log("Scommessa salvata con successo", response);
        // Aggiorna la lista delle scommesse fatte
        this.savedUserBets();
      },
      (error: any) => {
        console.error("Errore durante il salvataggio della scommessa", error);
      }
    );
  }

  betsData() {
    this.partiteService.betPageResults().subscribe((response: any) => {
      this.bets = response;
      console.log("dati ricevuti", response);
    });
  }

  userRank() {
    this.partiteService.getUsersPositions().subscribe((response: any) => {
      this.users = response;
      console.log("dati ricevuti", response);
    });
  }

  savedUserBets() {
    this.partiteService.getSaveBets(this.betBodySave).subscribe((response: any) => {
      this.savedBets = response;
      console.log("dati ricevuti", response);
    });
  }
}