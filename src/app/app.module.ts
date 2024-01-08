import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StatisticheComponent } from './statistiche/statistiche.component';
import { NewsComponent } from './news/news.component';
import { GiocaComponent } from './gioca/gioca.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatisticheComponent,
    NewsComponent,
    GiocaComponent,
    ProfiloComponent,
    RicercaComponent,
    ErrorComponent,
    TeamDetailComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
