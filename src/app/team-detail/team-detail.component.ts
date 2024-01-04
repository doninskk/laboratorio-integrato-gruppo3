import { Component } from '@angular/core';
import { partiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent {

  teamDetail: any=[];
  

  requestBodyId = {
    "id_team":689
  };

  ngOnInit() {
    this.detailOfTeam()
  }
  constructor(private partiteService: partiteServices) {}


  detailOfTeam(){
    this.partiteService.detailTeam(this.requestBodyId).subscribe((response: any) => {
      this.teamDetail = response;
      console.log("dati ricevuti",response);
    },
    );

}
}
