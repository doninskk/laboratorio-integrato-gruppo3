/*
* Questo componente gestisce la visualizzazione di articoli di notizie e la loro espansione o contrazione.
* Include la funzionalità di toggle per ciascun articolo.
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  // Stato del pulsante per il primo articolo
  isButtonClick = false;

  // Stati dei pulsanti per gli articoli successivi
  isButtonSecondArticleClick = false;
  isButtonThirdArticleClick = false;
  isButtonForthArticleClick = false;

  //accordionStates: boolean[] = [false, false, false, false];

  // Metodo per attivare/disattivare la visualizzazione dell'articolo principale
  toggleArticle() {
    this.isButtonClick = !this.isButtonClick;
  }
  
  // Metodi per attivare/disattivare la visualizzazione degli articoli successivi
  toggleSecondArticle() {
    this.isButtonSecondArticleClick = !this.isButtonSecondArticleClick;
  }

  toggleThirdArticle() {
    this.isButtonThirdArticleClick = !this.isButtonThirdArticleClick;
  }

  toggleForthArticle() {
    this.isButtonForthArticleClick = !this.isButtonForthArticleClick;
  }
}

