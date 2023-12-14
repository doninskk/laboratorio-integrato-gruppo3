import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  isButtonClick = false; //per seconda e terza  variante

  wiewMore(){
    this.isButtonClick = !this.isButtonClick;
  }
}
