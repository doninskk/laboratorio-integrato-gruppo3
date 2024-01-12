import { Component } from '@angular/core';
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
export class ProfiloComponent {
  prizes: Prize[] = [
    new Prize("https://www.ikea.com/it/it/images/products/ektorp-divano-letto-a-3-posti-vittaryd-bianco__0734968_PE739647_S5.JPG?f=xs", "Divano", 100, 100),
  ];
  coins: number = 100; // Inizializza le monete a 100

  /* fare un form per l'iscrizione e 1 per il login commentato perchè l'utente JSON già esiste
subscribeBody = {
    "mail":"pippo@mail.com",
    "password":"12345",
    "username":"pip",
    "admin":0
}
*/
  loginBodyJson = { /* form per login su nuovo componente + gestire l'errore se l'utente non esiste o se la psw è sbagliata */
    "mail":"pippo@mail.com",
    "password":"12345"
  }
  
  ngOnInit() {
  
    //this.userSubscribe()
    this.userLogin()
  
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
    userLogin(){

      this.partiteService.userLogin(this.loginBodyJson).subscribe((response: any) => {
        this.loginBodyJson = response;
        console.log("dati ricevuti",response);
      },
      );
    }

  incrementCoins() {
    this.coins += 10;
  }
}
