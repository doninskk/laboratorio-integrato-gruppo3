/*
* Questo componente gestisce il profilo dell'utente, inclusi premi, monete, scommesse e informazioni di login.
* Al suo avvio, recupera il token e le informazioni di login dal localStorage e chiama i servizi per ottenere i dati necessari.
*/

import { Component, OnInit } from '@angular/core';
import { PartiteServices } from '../servizi/partiteService';

// Interfaccia per la struttura delle carte
interface Card {
  image: string;
  title: string;
  description: string;
  prezzo: number;
}

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {

    cards: Card[] = [ // Array di carte con informazioni sui premi disponibili
    { image: '/assets/biglietto.png', title: 'Sconto Biglietti 10% ', description: 'Ottieni il 10% di sconto su una partita a tua scelta!', prezzo: 500 },
    { image: '/assets/biglietto.png', title: 'Sconto Biglietti 20%', description: 'Ottieni il 20% di sconto su una partita a tua scelta!', prezzo: 1000 },
    { image: '/assets/biglietto.png', title: 'Sconto Biglietti 30%', description: 'Ottieni il 30% di sconto su una partita a tua scelta!', prezzo: 1800 },
    { image: '/assets/biglietto.png', title: 'Sconto Biglietti 40%', description: 'Ottieni il 40% di sconto su una partita a tua scelta!', prezzo: 3000 },
    { image: '/assets/attrezzatura-pallavolo.avif', title: 'Sconto Articoli 10%', description: 'Ottieni il 10% di sconto su una articolo sportivo a tua scelta!', prezzo: 500 },
    { image: '/assets/set-pallavolo.avif', title: 'Sconto Articoli 20%', description: 'Ottieni il 20% di sconto su una articolo sportivo a tua scelta!', prezzo: 1000 },
    { image: '/assets/rete-pallavolo.avif', title: 'Sconto Articoli 30%', description: 'Ottieni il 30% di sconto su una articolo sportivo a tua scelta!', prezzo: 1800 },
    { image: '/assets/pallone-pallavolo.avif', title: 'Sconto Articoli 40%', description: 'Ottieni il 40% di sconto su una articolo sportivo a tua scelta!', prezzo: 3000 },
  ];

  coins: number = 100; // Saldo iniziale di monete
  isButtonDisabled: boolean = false; // Flag per disabilitare il pulsante di incremento monete
  userName: string = ""; // Nome utente visualizzato nel profilo
  bets: any = []; // Array per memorizzare le scommesse dell'utente
  coinsUpdate: any = [] // Array per memorizzare l'aggiornamento del saldo monete
  selectedDiscount: Card | null = null;
  
  private tokenKey: string = 'token'; // Chiave per il token nel localStorage
  private loginInfo: any = {}; // Oggetto per memorizzare le informazioni di login
  userBets: any = [];

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
    "week": 17,
    "season": 2023,
    "id_league": 97
  };

   // Settimane disponibili per il filtro
   weeks: number[] = [15,16,17,18,19,20,21,22,23,24,25,26];

   // array per la lega da scegliere nel filtro 
   selectedLeague: string = '';
   leagues = [
     { name: 'SuperLega', value: 'SuperLega',id:97 },
     { name: 'A2 Maschile', value: 'A2 Maschile',id:88 },
     { name: 'A2 Femminile', value: 'A2 Femminile', id:90 },
     { name: 'A1 Femminile', value: 'A1_Femminile',id:89 }
   ];
   
  ngOnInit() {
    // Dati di esempio per la registrazione e il login
    //this.userSubscribe()
    //  recupero il token e le informazioni di login dal localStorage all'avvio del componente
    this.token = localStorage.getItem(this.tokenKey);
    this.loginInfo = JSON.parse(localStorage.getItem('loginInfo') || '{}');
    this.betBodyJson.season = 2023
    this.userLogin();
    this.betFilterForWeeks();
    this.updateCoins()
    this.allBetsForUsers();
  }

  constructor(private partiteService: PartiteServices) {}

  /*
  userSubscribe(){

    this.partiteService.subscribeUser(this.subscribeBody).subscribe((response: any) => {
      this.subscribeBody = response;
      console.log("dati ricevuti",response);
    },
    );    

  }*/

  // Metodo per il login dell'utente
  userLogin() {
    this.partiteService.userLogin(this.loginBodyJson).subscribe(
      (response: any) => {
        console.log("dati ricevuti", response);

        if (response.token) {
          this.userName = response.username;
          
          // Salva il token e le informazioni di login nel localStorage per salvarle
          localStorage.setItem(this.tokenKey, response.token);
          localStorage.setItem('loginInfo', JSON.stringify(response));
        } else {  // se il login paswd o userName sono sbagliati non visualizzo 
          console.error("Errore durante il login: login non riuscito");
          this.userName = "";
        }
      },
      (error: any) => {
        console.error("Errore durante il login", error);

        if (error.status === 401) {  // gestione errori login paswd in futuro sarà pronta per il componente login
          console.error("Errore: password errata");
        } else {
          console.error("Errore sconosciuto durante il login");
        }

        this.userName = "";
      }
    );
  }
// funzione per capire se si hanno  abbasatanza crediti o meno per acquistare le offerte nelle card 
  canPurchase(discountPrice: number): boolean {
    return this.coinsUpdate.money >= discountPrice;

  }
// funzione per scalare i crediti dell'utente dopo che acquista un offerta se ha abbastanza soldi
  purchaseDiscount(index: number): void {
    const selectedDiscount = this.cards[index];

    if (this.canPurchase(selectedDiscount.prezzo)) {
      this.coinsUpdate.money -= selectedDiscount.prezzo;

      console.log(`Hai acquistato lo sconto: ${selectedDiscount.title}`);
    } else {
      this.selectedDiscount = null;
      console.log("Non hai abbastanza monete per acquistare questo sconto.");
    }
  }

  // Metodo per ottenere le scommesse filtrate per settimane
  betFilterForWeeks() {
    this.partiteService.filterForBets(this.betBodyJson).subscribe((response: any) => {
      this.bets = response;
      console.log("dati ricevuti", response);
    });
  }


  // Proprietà per salvare e recuperare il token
  private token: string | null = null;

  // Metodo per ottenere il token nel resto del componente
  getToken(): string | null {
    return this.token;
  }

  // Metodo per aggiornare le monete dell'utente
  updateCoins() {
    // Verifica se hai un token salvato
    const token = this.getToken();
  
    if (token) {
      // Crea il corpo della richiesta con il token
      const coinsRequestBody = {
        "token": token,
        "num": 0
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

  // Metodo per incrementare le monete dell'utente
  incrementCoins() {
    // Verifica se il pulsante è già disabilitato
    if (!this.isButtonDisabled) {
      // Incrementa le monete e disabilita il pulsante
      this.coinsUpdate.money += 10;
      this.isButtonDisabled = true;

      // Chiamata  alll'API per aggiornare il saldo utente
      this.partiteService.getCoins(10).subscribe(
        (response: any) => {
          console.log("Aggiornamento del saldo riuscito", response);
          // Puoi aggiungere ulteriori azioni qui, se necessario
        },
        (error: any) => {
          console.error("Errore durante l'aggiornamento del saldo", error);
          // Puoi gestire gli errori o aggiungere ulteriori azioni qui
        }
      );
  
      // Imposta un timeout per riabilitare il pulsante dopo un giorno
      setTimeout(() => {
        this.isButtonDisabled = false;
      }, 24 * 60 * 60 * 1000); // 24 ore in millisecondi
    }
  }
  allBetsForUsers() {  // tutte le bet fatte da un utente
    const token = this.getToken(); // prendo il token salvato nel localStorage
  
    if (token) {
      const params = { // lo creo e lo passo come JSON richiesto dalla risposta
        token: token
      };
  
      this.partiteService.getAllBets(params).subscribe(  // dopo che ho il token dell'utente eseguo la chiamata
        (response: any) => {
          this.userBets = response;
          console.log("dati ricevuti", response);
        },
      );
    } else {
      console.error("Token non disponibile. L'utente potrebbe non essere autenticato correttamente.");
    }
  }

weekFilterResults() {
  // Verifica se è stata selezionata una lega
  const selectedLeagueObj = this.leagues.find(league => league.value === this.selectedLeague);

  // Aggiorna l'id della lega in requestBody se è presente
  if (selectedLeagueObj && selectedLeagueObj.id) {
    this.betBodyJson.id_league = selectedLeagueObj.id; // Assicurati che ci sia una proprietà id nell'oggetto league
  }

    // Chiamata al servizio per ottenere i dati in base alla week, id_league e season selezionati
    this.partiteService.filterForBets(this.betBodyJson).subscribe((response: any) => {
      this.bets = response;
      console.log("dati ricevuti", response);
    });
  }

  scrollToBet(idPartita: number) {
    //getElementById--> Trova l'elemento HTML associato alla scommessa usando l'id della partita
    const element = document.getElementById(`bet-${idPartita}`);
    if (element) {
      // Se l'elemento è stato trovato, esegue lo scorrimento verso di esso stile ancora HTML
      // con un effetto di scorrimento fluido (smooth).
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
  
}



  
