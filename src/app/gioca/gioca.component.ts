import { Component } from '@angular/core';
import { partiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-gioca',
  templateUrl: './gioca.component.html',
  styleUrls: ['./gioca.component.css']
})
export class GiocaComponent {

  bets: any = []
  users: any = []
  
  
 betBodyJson = {
    "week":11,
    "season":2023,
    "id_league":97
};

  ngOnInit() {


    this.betsData()
    this.betFilterForWeeks()
    this.userRank()
  }

  constructor(private partiteService: partiteServices) {}

  
betsData(){
  this.partiteService.betPageResults().subscribe((response: any) => {
    this.bets = response;
    console.log("dati ricevuti",response);
  },
  );

}
betFilterForWeeks(){

  this.partiteService.filterForBets(this.betBodyJson).subscribe((response: any) => {
    this.bets = response;
    console.log("dati ricevuti",response);
  },
  );
}


userRank(){
  this.partiteService.getUsersPositions().subscribe((response: any) => {
    this.users = response;
    console.log("dati ricevuti",response);
  },
  ); 
}

}
