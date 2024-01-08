import { Component } from '@angular/core';
import { partiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-gioca',
  templateUrl: './gioca.component.html',
  styleUrls: ['./gioca.component.css']
})
export class GiocaComponent {

  bets: any=[]
  
  

  ngOnInit() {


    this.betsData()
  }

  constructor(private partiteService: partiteServices) {}

  
betsData(){
  this.partiteService.betPageResults().subscribe((response: any) => {
    this.bets = response;
    console.log("dati ricevuti",response);
  },
  );

}

}
