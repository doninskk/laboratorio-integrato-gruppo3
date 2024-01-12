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

    
  
 loginBodyJson = {
  "mail":"vale@mail.com",
  "password":"ciccio"
}

ngOnInit() {

  
 
}

constructor(private partiteService: partiteServices) {}

  incrementCoins() {
    this.coins += 10;
  }


  

  
}
