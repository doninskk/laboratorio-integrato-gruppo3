import { Component } from '@angular/core';
import { partiteServices } from '../servizi/partiteService';

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
    "id_team": 751,
    "id_game": 148488
  };

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

  constructor(private partiteService: partiteServices) {}

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
