import { Component } from '@angular/core';
import { partiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-statistiche',
  templateUrl: './statistiche.component.html',
  styleUrls: ['./statistiche.component.css']
})
export class StatisticheComponent {

  classifica: any=[];

bodyClassifica=
  {
    "id_season":2023,
   "id_league":97,
    "id_group":3
}


ngOnInit() {


  this.standingsLeague()
}
constructor(private partiteService: partiteServices) {}

standingsLeague(){
  this.partiteService.standings(this.bodyClassifica).subscribe((response: any) => {
    this.classifica = response;
    console.log("dati ricevuti",response);
  },
  );

}


}
