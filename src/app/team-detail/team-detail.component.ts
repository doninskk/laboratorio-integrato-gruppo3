import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { partiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent {

  teamDetail: any = {};
  teamId: number | null = null;  // Dichiara una variabile per memorizzare l'ID del team

  constructor(
    private partiteService: partiteServices,
    private route: ActivatedRoute  // Inietta ActivatedRoute nel costruttore
  ) { }

  ngOnInit() {
    //  l'ID del team dalla route e dall'URL
    const idParam = this.route.snapshot.paramMap.get('id');
    this.teamId = idParam ? +idParam : null;

    // precauzione  si invoca solo se l'id è presente
    if (this.teamId !== null) {
      this.detailOfTeam();
    } else {
      console.error("ID del team non valido");

    }
  }

  detailOfTeam() {
    // id team nella richiesta
    this.partiteService.detailTeam({ "id_team": this.teamId }).subscribe((response: any) => {
      this.teamDetail = response;
      console.log("dati ricevuti", response);
    });
  }
}