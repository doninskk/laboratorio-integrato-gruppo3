/*
* Questo componente gestisce la visualizzazione dettagliata di una squadra. 
* Ottiene l'ID della squadra dalla route e recupera i dettagli della squadra chiamando il servizio partiteService.
*/

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { partiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent {

  teamDetails: any[] = []; // Array per memorizzare i dettagli della squadra
  teamId: number | null = null;  // Variabile per memorizzare l'ID della squadra

  constructor(
    private partiteService: partiteServices,
    private route: ActivatedRoute  // Inietta ActivatedRoute nel costruttore
  ) { }

  ngOnInit() {
    // Ottiene l'ID della squadra dalla route e dall'URL
    const idParam = this.route.snapshot.paramMap.get('id');
    this.teamId = idParam ? +idParam : null;

    // Verifica se l'ID della squadra è presente e chiama la funzione per ottenere i dettagli della squadra
    if (this.teamId !== null) {
      this.detailOfTeam();
    } else {
      console.error("ID del team non valido");
    }
  }

  // Funzione per ottenere i dettagli della squadra
  detailOfTeam() {
    // Effettua la chiamata al servizio partiteService per ottenere i dettagli della squadra con l'ID corrente
    this.partiteService.detailTeam({ "id_team": this.teamId }).subscribe((response: any) => {
      this.teamDetails = response;  // Assegna l'array di dettagli della squadra
      console.log("dati ricevuti", response);
    });
  }
}