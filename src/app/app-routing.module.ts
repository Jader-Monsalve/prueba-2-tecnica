import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SeriesComponent } from './components/series/series.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'navbar', component: NavbarComponent },
{ path: 'series', component: SeriesComponent },
{ path: 'movies', component: MoviesComponent },
{ path: 'footer', component: FooterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
