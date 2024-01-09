import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { partiteServices } from '../servizi/partiteService';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent {

  gameDetail: any = {};
  gameId: number | null = null;


  constructor(
    private partiteService: partiteServices,
    private route: ActivatedRoute 
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const idParam = params['id'];
      this.gameId = idParam ? +idParam : null;
      if (this.gameId !== null) {
        this.detailOfGame();
      } else {
        console.error("ID della partita non valido");
      }
    });
  }

  detailOfGame() {
    this.partiteService.getGameDetail({ "id_game": this.gameId }).subscribe((response: any) => {
      this.gameDetail = response;
      console.log("dati ricevuti", response);
    });
  }
}
