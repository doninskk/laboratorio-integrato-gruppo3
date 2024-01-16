import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { partiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent {

  teamDetails: any[] = [];
  teamId: number | null = null;
  id_lega: number | null = null;
  id_season: number | null = null;

  constructor(
    private partiteService: partiteServices,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Estrai i parametri dalla route e assegnali alle variabili del componente
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

  detailOfTeam() {
    // Aggiorna la richiesta includendo i nuovi parametri
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
