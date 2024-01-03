import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatisticheComponent } from './statistiche/statistiche.component';
import { NewsComponent } from './news/news.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { GiocaComponent } from './gioca/gioca.component';
import { ErrorComponent } from './error/error.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'statistiche', component: StatisticheComponent},
  { path: 'news', component: NewsComponent},
  { path: 'ricerca', component: RicercaComponent},
  { path: 'profilo', component: ProfiloComponent},
  { path: 'gioca', component: GiocaComponent},
  { path: 'team/:id', component: TeamDetailComponent },
  { path: '**', component: ErrorComponent}, //Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
