import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  selectedArticleIndex: number | null = null;

  articles = [
    {
      title: 'La Strategia Vincente',
      content: 'Vincere una partita a pallavolo non è solo questione di forza, ma soprattutto di strategia e coordinazione. In questo articolo, esploreremo alcune strategie chiave che ti aiuteranno a portare a casa la vittoria!',
      articleContent: "<p>COMUNICAZIONE E COORDINAZIONE </p>"
        
    },
    {
      title: 'I giganti del Volley',
      content: 'Il mondo della pallavolo ha visto fiorire talenti straordinari che hanno scritto la storia dello sport grazie alle loro abilità eccezionali e con il contributo dei propri Team. In questo articolo, esploreremo alcuni dei più grandi pallavolisti di sempre, le loro vittorie, e ciò che hanno lasciato alla pallavolo.'
    },
    {
      title: 'Semifinale Infuocata',
      content: "Semifinale di campionato, due squadre, i Leoni del Mare e i Fulmini D'Argento, si preparano a darsi battaglia. Una partita di pallavolo che promette emozioni forti."
    }
  ];

  toggleArticle(index: number): void {
    if (this.selectedArticleIndex === index) {
      // Se clicchi sulla card già aperta, chiudila
      this.selectedArticleIndex = null;
    } else {
      // Altrimenti, apri la card cliccata
      this.selectedArticleIndex = index;
    }
  }
}
