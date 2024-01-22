/*
* Questo componente gestisce la visualizzazione dettagliata di una squadra. 
* Ottiene l'ID della squadra dalla route e recupera i dettagli della squadra chiamando il servizio partiteService.
*/

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { PartiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent {


  teamDetails: any[] = []; // Array per memorizzare i dettagli della squadra
  teamId: number | null = null; // Variabile per memorizzare l'ID della squadra
  id_lega: number | null = null;// variabile per memorizzare id della league selezonata
  id_season: number | null = null;// variabile per memorizzare la stagione di riferimento

  constructor(
    private partiteService: PartiteServices,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Estrae i parametri dalla route e li assegna alle variabili del componente
    const params = this.route.snapshot.params;
    this.teamId = params['id'] ? +params['id'] : null;
    this.id_lega = params['id_lega'] ? +params['id_lega'] : null;
    this.id_season = params['id_season'] ? +params['id_season'] : null;

    // Verifica che l'ID del team sia presente prima di chiamare il servizio

    if (this.teamId !== null) {
      this.detailOfTeam();
    } else {
      console.error("ID del team non valido");
    }
  }

  // Funzione per ottenere i dettagli della squadra
  detailOfTeam() {

    // Aggiorna la richiesta includendo i nuovi parametri presi dalla route
    const request = {
      "id_team": this.teamId,
      "id_lega": this.id_lega,
      "id_season": this.id_season
    };

    // Effettua la chiamata al servizio con la nuova richiesta
    this.partiteService.detailTeam(request).subscribe((response: any) => {
      this.teamDetails = response;

      console.log("dati ricevuti", response);
    });
  }
}
