import { Component } from '@angular/core';
import { partiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent {

  teamList :any={} ;

  requestBodyTeams = {
    "season": 2023,
    "id_league": 97
  };

  ngOnInit() {
    this.teamsList();
  }
  constructor(private partiteService: partiteServices) {}

  teamsList() {
    this.partiteService.teamsList(this.requestBodyTeams).subscribe((response: any) => {
      this.teamList = response;
      console.log("dati ricevuti",response);
    },
    );


}
}
