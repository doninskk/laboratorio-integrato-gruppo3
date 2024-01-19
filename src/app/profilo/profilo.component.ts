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
  
  private tokenKey: string = 'token'; // Chiave per il token nel localStorage
  private loginInfo: any = {}; // Oggetto per memorizzare le informazioni di login

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
    "week": 15,
    "season": 2023,
    "id_league": 97
  };

  ngOnInit() {
    // Dati di esempio per la registrazione e il login
    //this.userSubscribe()
    //  recupero il token e le informazioni di login dal localStorage all'avvio del componente
    this.token = localStorage.getItem(this.tokenKey);
    this.loginInfo = JSON.parse(localStorage.getItem('loginInfo') || '{}');

    this.userLogin();
    this.betFilterForWeeks();
    this.updateCoins()
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
  
      // Chiama l'API per aggiornare il saldo utente
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
}