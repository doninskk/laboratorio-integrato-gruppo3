import { AfterViewInit, Component, OnInit } from '@angular/core';
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

interface Card {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {
  prizes: Prize[] = [
    new Prize("https://www.ikea.com/it/it/images/products/ektorp-divano-letto-a-3-posti-vittaryd-bianco__0734968_PE739647_S5.JPG?f=xs", "Divano", 100, 100),
  ];


    cards: Card[] = [
    { image: '/assets/img1.jpg', title: 'Card 1', description: 'Descrizione per la card 1' },
    { image: '/assets/img2.jpg', title: 'Card 2', description: 'Descrizione per la card 2' },
    { image: '/assets/img2.jpg', title: 'Card 2', description: 'Descrizione per la card 2' },
    { image: '/assets/img2.jpg', title: 'Card 2', description: 'Descrizione per la card 2' },
    { image: '/assets/img2.jpg', title: 'Card 2', description: 'Descrizione per la card 2' },
    { image: '/assets/img2.jpg', title: 'Card 2', description: 'Descrizione per la card 2' },
    { image: '/assets/img2.jpg', title: 'Card 2', description: 'Descrizione per la card 2' },
    { image: '/assets/img2.jpg', title: 'Card 2', description: 'Descrizione per la card 2' },
  ];

  coins: number = 100;
  isButtonDisabled: boolean = false;

  incrementCoins() {
    // Verifica se il pulsante è già disabilitato
    if (!this.isButtonDisabled) {
      // Incrementa le monete e disabilita il pulsante
      this.coinsUpdate.money += 10;
      this.isButtonDisabled = true;

      // Imposta un timeout per riabilitare il pulsante dopo un giorno
      setTimeout(() => {
        this.isButtonDisabled = false;
      }, 24 * 60 * 60 * 1000); // 24 ore in millisecondi
    }
  }

  userName: string = "";
  bets: any = {};
  coinsUpdate: any = []
  private tokenKey: string = 'token'; // Chiave per il token nel localStorage

  private loginInfo: any = {};

  /* fare un form per l'iscrizione e 1 per il login commentato perchè l'utente pippo già esiste
subscribeBody = {
    "mail":"pippo@mail.com",
    "password":"12345",
    "username":"pip",
    "admin":0
}
*/

  loginBodyJson = {
    "mail": "vale@mail.com",
    "password": "ciccio"
  };

  betBodyJson = {
    "week": 18,
    "season": 2023,
    "id_league": 97
  };



  ngOnInit() {

    //this.userSubscribe()
    //  recupero il token e le informazioni di login dal localStorage all'avvio del componente
    this.token = localStorage.getItem(this.tokenKey);
    this.loginInfo = JSON.parse(localStorage.getItem('loginInfo') || '{}');

    this.userLogin();
    this.betFilterForWeeks();
    this.updateCoins()
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

        if (response.token) {
          this.userName = response.username;
          
          // Salvo il token e le informazioni di login nel localStorage per salvarle
          localStorage.setItem(this.tokenKey, response.token);
          localStorage.setItem('loginInfo', JSON.stringify(response));
        } else {
          console.error("Errore durante il login: login non riuscito");
          this.userName = "";
        }
      },
      (error: any) => {
        console.error("Errore durante il login", error);

        if (error.status === 401) {
          console.error("Errore: password errata");
        } else {
          console.error("Errore sconosciuto durante il login");
        }

        this.userName = "";
      }
    );
  }

  betFilterForWeeks() {
    this.partiteService.filterForBets(this.betBodyJson).subscribe((response: any) => {
      this.bets = response;
      console.log("dati ricevuti", response);
    });
  }


  //  proprietà per salvare e recuperare il token
  private token: string | null = null;

  // metodo per ottenere il token nel resto del componente
  getToken(): string | null {
    return this.token;
  }

  updateCoins() {
    // Verifica se hai un token salvato
    const token = this.getToken();
  
    if (token) {
      // Crea il corpo della richiesta con il token
      const coinsRequestBody = {
        "token": token,
        "num": 200
      };
  
      // Visualizza i dati prima della chiamata
      console.log("Prima della chiamata - Dati della richiesta:", coinsRequestBody);
  
      // Effettua la richiesta con il corpo contenente il token
      this.partiteService.getCoins(coinsRequestBody).subscribe(
        (response: any) => {
          // Visualizza i dati ricevuti dopo la risposta
          console.log("Dopo la risposta - Dati ricevuti:", response);
  
          this.coinsUpdate = response;
          console.log("Dati ricevuti", response);
        },
        (error: any) => {
          console.error("Errore durante l'aggiornamento del saldo", error);
        }
      );
    } else {
      console.error("Token non disponibile. L'utente potrebbe non essere autenticato correttamente.");
    }
  }
  

}

