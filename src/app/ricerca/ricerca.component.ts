/*
* Questo componente gestisce la pagina di ricerca, consentendo agli utenti di cercare squadre popolari.
* Contiene un elenco di squadre popolari con id e nome, una query di ricerca e funzioni per eseguire la ricerca e reindirizzare alle pagine delle squadre.
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit{
  popularTeams: any[] = []; // Array contenente le squadre popolari con proprietà 'name' e 'id'
  searchQuery: string = ''; // Stringa contenente la query di ricerca


  constructor(private router: Router) {}

  ngOnInit() {
    // Inizializzazione dell'array di squadre popolari con id e nome
    this.popularTeams = [
      { id: 741, name: 'Cisterna' },
      { id: 737, name: 'Lube Civitanova' },
      { id: 742, name: 'Milano' },
      { id: 738, name: 'Modena' },
      { id: 743, name: 'Monza' },
      { id: 744, name: 'Padova' },
      { id: 745, name: 'Piacenza' },
      { id: 751, name: 'Taranto' },
      { id: 740, name: 'Trentino' },
      { id: 747, name: 'Verona' },
    ];
  }

  search() {
    // Funzione per eseguire la ricerca
    // È possibile utilizzare il valore di this.searchQuery per eseguire la ricerca
    console.log('Searching for:', this.searchQuery);
    // Aggiornare i risultati della ricerca in base all'implementazione effettiva della ricerca
  }

  // Funzione per reindirizzare alla pagina della squadra selezionata
  redirectToTeamPage(team: any) {
    // Reindirizza alla pagina della squadra in base all'id della squadra
    this.router.navigate(['/team', team.id]);
  }
}

