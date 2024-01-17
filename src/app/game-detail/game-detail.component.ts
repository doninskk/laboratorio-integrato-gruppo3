/*
* Questo componente gestisce la visualizzazione dei dettagli di una partita specifica.
* Recupera l'ID della partita dalla route e chiama il servizio per ottenere i dettagli corrispondenti.
*/

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { PartiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent {

  gameDetail: any = {};
  gameId: number | null = null;


  constructor(
    private partiteService: PartiteServices,
    private route: ActivatedRoute 
  ) { }

  ngOnInit() {
    
    // Recupera l'ID della partita dalla route
    this.route.params.subscribe(params => {
      const idParam = params['id'];
      this.gameId = idParam ? +idParam : null;
      
      // Se l'ID è valido, recupera i dettagli della partita
      if (this.gameId !== null) {
        this.detailOfGame();
      } else {
        console.error("ID della partita non valido");
      }
    });
  }

  // Chiama il servizio per ottenere i dettagli della partita
  detailOfGame() {
    this.partiteService.getGameDetail({ "id_game": this.gameId }).subscribe((response: any) => {
      this.gameDetail = response;
      console.log("dati ricevuti", response);
    });
  }
}
