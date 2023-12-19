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
      articleContent: "<h3>COMUNICAZIONE E COORDINAZIONE </h3>  <p>Una comunicazione chiara e una buona coordinazione sono fondamentali per una squadra vincente. Utilizza segnali veloci e precisi per indicare i tuoi movimenti e intenzioni ai tuoi compagni. Facendolo ridurrai gli errori e migliorerà la reattività della squadra alle situazioni di gioco in rapido cambiamento. </p> <h3>Studia gli Avversari: </h3>      <p> Osservare le partite precedenti della squadra avversaria può fornire preziose informazioni tattiche che possono essere sfruttate durante la partita.Studia i loro punti di forza e debolezza. Identifica i giocatori chiave avversari e sviluppa strategie per neutralizzarli. </p>   <h3> Allenamento: </h3>  <p> Un'adeguata preparazione è essenziale per affrontare una partita di pallavolo. Migliora la tua resistenza, forza e flessibilità attraverso un allenamento costante. Perfeziona le tue abilità tecniche come la battuta, la ricezione, la schiacciata e il palleggio. Un giocatore preparato fisicamente e tecnicamente saprà tenere il sangue freddo nei momenti importanti. </p>  <h3>Tattiche </h3>  <p> Sviluppate tattiche specifiche per la tua squadra in base alle vostre qualità e ai punti deboli dell'avversario. Ad esempio, se hai un forte attaccante, organizza il gioco intorno a lui per sfruttare al meglio le sue capacità. Lavora su schemi di gioco che confondano l'avversario e creino opportunità di attacco. </p> <h3>Adattabilità</h3> <p>Nessuna partita di pallavolo è identica, e le circostanze possono cambiare rapidamente. La capacità di adattarsi alle situazioni impreviste è cruciale. La tua squadra deve rimanere flessibile e modificare la strategia in base alle esigenze del momento. Essere pronti a cambiare tattica può fare la differenza tra la vittoria e la sconfitta. </p>  <h3>Mentalità Positiva: </h3> <p> Mantenere una mentalità positiva è fondamentale per non lasciarsi scoraggiare quando si è in difficoltà. Gli errori possono verificarsi, ma è importante concentrarsi sulla prossima giocata al posto di farsi abbattere. Una squadra con una mentalità positiva lotterà fino alla fine, e anche se perdesse tornerebbe a casa ancora più motivato per la prossima partita. Questa mentalità è ciò che distingue i vinti dai vincenti. </p>   <h3>Conclusione </h3> <p> Vincere una partita a pallavolo richiede più di abilità fisiche e tecniche; è una combinazione di comunicazione, tattiche, adattabilità e una mentalità positiva. Preparati bene, studia i tuoi avversari, e ricorda che il successo è il risultato di una squadra unita, che lavora insieme verso un obiettivo comune. Con queste strategie in mente, sarai pronto a vincere la tua prossima partita di pallavolo con stile e determinazione. </p>",
      img: '/assets/la-strategia-vincente.jpg'

        
    },
    {
      title: 'I giganti del Volley',
      content: 'Il mondo della pallavolo ha visto fiorire talenti straordinari che hanno scritto la storia dello sport grazie alle loro abilità eccezionali e con il contributo dei propri Team. In questo articolo, esploreremo alcuni dei più grandi pallavolisti di sempre, le loro vittorie, e ciò che hanno lasciato alla pallavolo.',
      articleContent: "<h3>Karch Kiraly (Stati Uniti) </h3>  <p>Karch Kiraly è considerato uno dei migliori pallavolisti di tutti i tempi. L’unico che ha vinto medaglie d'oro sia nei Giochi Olimpici indoor che in quelli beach volley, un traguardo senza precedenti. Dopo il suo ritiro, Kiraly ha continuato a lasciare il segno come allenatore, guidando la femminile degli Stati Uniti alla vittoria nelle Olimpiadi del 2012. La sua versatilità, forza fisica e capacità di leadership lo collocano al vertice della lista dei grandi del volley. </p> <h3>Studia gli Avversari: </h3>      <p> Osservare le partite precedenti della squadra avversaria può fornire preziose informazioni tattiche che possono essere sfruttate durante la partita.Studia i loro punti di forza e debolezza. Identifica i giocatori chiave avversari e sviluppa strategie per neutralizzarli. </p>   <h3> Allenamento: </h3>  <p> Un'adeguata preparazione è essenziale per affrontare una partita di pallavolo. Migliora la tua resistenza, forza e flessibilità attraverso un allenamento costante. Perfeziona le tue abilità tecniche come la battuta, la ricezione, la schiacciata e il palleggio. Un giocatore preparato fisicamente e tecnicamente saprà tenere il sangue freddo nei momenti importanti. </p>  <h3>Tattiche </h3>  <p> Sviluppate tattiche specifiche per la tua squadra in base alle vostre qualità e ai punti deboli dell'avversario. Ad esempio, se hai un forte attaccante, organizza il gioco intorno a lui per sfruttare al meglio le sue capacità. Lavora su schemi di gioco che confondano l'avversario e creino opportunità di attacco. </p> <h3>Adattabilità</h3> <p>Nessuna partita di pallavolo è identica, e le circostanze possono cambiare rapidamente. La capacità di adattarsi alle situazioni impreviste è cruciale. La tua squadra deve rimanere flessibile e modificare la strategia in base alle esigenze del momento. Essere pronti a cambiare tattica può fare la differenza tra la vittoria e la sconfitta. </p>  <h3>Mentalità Positiva: </h3> <p> Mantenere una mentalità positiva è fondamentale per non lasciarsi scoraggiare quando si è in difficoltà. Gli errori possono verificarsi, ma è importante concentrarsi sulla prossima giocata al posto di farsi abbattere. Una squadra con una mentalità positiva lotterà fino alla fine, e anche se perdesse tornerebbe a casa ancora più motivato per la prossima partita. Questa mentalità è ciò che distingue i vinti dai vincenti. </p>   <h3>Conclusione </h3> <p> Vincere una partita a pallavolo richiede più di abilità fisiche e tecniche; è una combinazione di comunicazione, tattiche, adattabilità e una mentalità positiva. Preparati bene, studia i tuoi avversari, e ricorda che il successo è il risultato di una squadra unita, che lavora insieme verso un obiettivo comune. Con queste strategie in mente, sarai pronto a vincere la tua prossima partita di pallavolo con stile e determinazione. </p>"
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
