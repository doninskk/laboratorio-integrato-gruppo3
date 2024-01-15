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
  savedBets : any= []
  
  
 betBodyJson = {
    "week":15,
    "season":2023,
    "id_league":97
};



betBodySave={
  "token":"",
  "id_team":751,
  "id_game":148488
}

  ngOnInit() {
    const token = localStorage.getItem('token');
    console.log(token)

    if (token) {
      this.betBodySave = {
        "token": token,
        "id_team": 751,
        "id_game": 148488
      }}
    this.betsData()
    this.betFilterForWeeks()
    this.userRank()
    this.savedUserBets()
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

savedUserBets(){

  this.partiteService.getSaveBets(this.betBodySave).subscribe((response: any) => {
    this.savedBets = response;
    console.log("dati ricevuti",response);
  },
  );
}

}