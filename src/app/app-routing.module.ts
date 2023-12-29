import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmsComponent } from './components/films/films.component';
import { PopularComponent } from './components/popular/popular.component';
import { LoginComponent } from './components/login/login.component';
import { UpComingComponent } from './components/up-coming/up-coming.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { DetailsComponent } from './components/details/details.component';
import { AboutComponent } from './components/about/about.component';
import { AiringTvComponent } from './components/airing-tv/airing-tv.component';
import { OnAirComponent } from './components/on-air/on-air.component';
import { PopularTvComponent } from './components/popular-tv/popular-tv.component';
import { TopratedTvComponent } from './components/toprated-tv/toprated-tv.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ListComponent } from './components/list/list.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'films', component:FilmsComponent},
  { path: 'login', component:LoginComponent},
  { path: 'popular', component:PopularComponent},
  { path: 'upComing', component:UpComingComponent},
  { path: 'topRated', component:TopRatedComponent},
  { path: 'nowPlaying', component:NowPlayingComponent},
  { path: 'details/:id', component: DetailsComponent },
  { path: 'airingtv', component: AiringTvComponent },
  { path: 'onAir', component: OnAirComponent },
  { path: 'populartv', component: PopularTvComponent },
  { path: 'topratedtv', component: TopratedTvComponent },
  { path: 'about', component: AboutComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'list', component: ListComponent },
  { path: 'listMovies/:search', component: ListMoviesComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
