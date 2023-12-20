import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  isButtonClick = false;

  isButtonSecondArticleClick = false;
  isButtonThirdArticleClick = false;

  //accordionStates: boolean[] = [false, false, false, false];

  
  toggleSecondArticle() {
    this.isButtonSecondArticleClick = !this.isButtonSecondArticleClick;
  }

  
  toggleThirdArticle() {
    this.isButtonThirdArticleClick = !this.isButtonThirdArticleClick;
  }
}

