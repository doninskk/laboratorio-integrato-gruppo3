import { AfterViewInit, Component } from '@angular/core';
import { partiteServices } from '../servizi/partiteService';


class Prize {
  img: string;
  description: string;
  cost: number;
  progress: number;

  constructor(img: string, description: string, cost: number, progress: number) {
    this.img = img;
    this.description = description;
    this.cost = cost;
    this.progress = progress;

    
  }
}

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})


export class ProfiloComponent{
  prizes: Prize[] = [
    new Prize("https://www.ikea.com/it/it/images/products/ektorp-divano-letto-a-3-posti-vittaryd-bianco__0734968_PE739647_S5.JPG?f=xs", "Divano", 100, 100),
  ];
  coins: number = 100; // Inizializza le monete a 100
   userName: string = ""; // Inizializza il nome utente
  bets: any = {};

  /* fare un form per l'iscrizione e 1 per il login commentato perchè l'utente pippo già esiste
subscribeBody = {
    "mail":"pippo@mail.com",
    "password":"12345",
    "username":"pip",
    "admin":0
}
*/
  loginBodyJson = { /* form per login su nuovo componente + gestire l'errore se l'utente non esiste o se la psw è sbagliata */
   /* "mail":"pippo@mail.com",
    "password":"12345",*/

    "mail":"vale@mail.com", /* secondo utente pass corretta */
    "password":"ciccio"
  }
  betBodyJson = { /*  Fare nella pag profilo una sezione le tue bet con il filtro per week  */
    "week":15,
    "season":2023,
    "id_league":97
};

  
  ngOnInit() {
  
    //this.userSubscribe()
    this.userLogin()
    this.betFilterForWeeks()
  
  }

  constructor(private partiteService: partiteServices) {}
/*
  userSubscribe(){

    this.partiteService.subscribeUser(this.subscribeBody).subscribe((response: any) => {
      this.subscribeBody = response;
      console.log("dati ricevuti",response);
    },
    );    

  }*/
  userLogin() {
    this.partiteService.userLogin(this.loginBodyJson).subscribe(
      (response: any) => {
        console.log("dati ricevuti", response);
  
        // Controlla se la risposta contiene il token (o eventualmente altre informazioni che indicano un login valido)
        if (response.token) {
          this.userName = response.username;
          this.loginBodyJson.mail;
        } else {
          console.error("Errore durante il login: login non riuscito");
          this.userName = "";
          this.loginBodyJson.mail = "";
        }
      },
      (error: any) => {
        console.error("Errore durante il login", error);
  
        // Controlla il codice di risposta HTTP per gestire gli errori specifici
        if (error.status === 401) {
          console.error("Errore: password errata");
        } else {
          console.error("Errore sconosciuto durante il login");
        }
  
        this.userName = "";
        this.loginBodyJson.mail = "";
      }
    );
  }

  betFilterForWeeks(){

    this.partiteService.filterForBets(this.betBodyJson).subscribe((response: any) => {
      this.bets = response;
      console.log("dati ricevuti",response);
    },
    );
  }
  
  incrementCoins() {
    this.coins += 10;
  }

  
}