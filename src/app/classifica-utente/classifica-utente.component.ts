import { Component } from '@angular/core';
import { PartiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-classifica-utente',
  templateUrl: './classifica-utente.component.html',
  styleUrls: ['./classifica-utente.component.css']
})
export class ClassificaUtenteComponent {
  usersStanding: any = []; // array per salvare la classifica degli utenti

  ngOnInit() {
    // Dati di esempio per la registrazione e il login
    //this.userSubscribe()
    //  recupero il token e le informazioni di login dal localStorage all'avvio del componente
    this.userRank()
  }

  constructor(private partiteService: PartiteServices) {}

  userRank() {
    this.partiteService.getUsersPositions().subscribe((response: any) => {
      this.usersStanding = response;
      console.log("dati ricevuti", response);
    });
  }
}
