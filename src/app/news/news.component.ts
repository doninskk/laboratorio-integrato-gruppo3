import { Component } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  isButtonClick = false; 

  wiewMore(){
    this.isButtonClick = !this.isButtonClick;
  }

  wiewSecondNews(){
    this.isButtonClick = !this.isButtonClick;
  }
  

  disableAccordion(){
    if(this.isButtonClick = true){ 

      this.isButtonClick = false
        
    }
  }
}