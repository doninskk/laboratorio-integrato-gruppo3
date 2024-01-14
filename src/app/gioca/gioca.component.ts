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

loginBodyJson = { /* form per login su nuovo componente + gestire l'errore se l'utente non esiste o se la psw è sbagliata */
/* "mail":"pippo@mail.com",
 "password":"12345",*/

 "mail":"vale@mail.com", /* secondo utente pass corretta */
 "password":"ciccio"
}

betBodySave={
  "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjozLCJleHAiOjE3MDUyNTUzNjYsImlhdCI6MTcwNTI1MTc2Nn0.c5l4C4TFpRt_J1FAng7ixVp4N84zUqBth_7cif1D05c",
  "id_team":740,
  "id_game":148487
}

  ngOnInit() {
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