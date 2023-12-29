import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FilmsComponent } from './components/films/films.component';
import { HttpClientModule } from '@angular/common/http';
import { PopularComponent } from './components/popular/popular.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpComingComponent } from './components/up-coming/up-coming.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { DetailsComponent } from './components/details/details.component';
import { AboutComponent } from './components/about/about.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AiringTvComponent } from './components/airing-tv/airing-tv.component';
import { OnAirComponent } from './components/on-air/on-air.component';
import { PopularTvComponent } from './components/popular-tv/popular-tv.component';
import { TopratedTvComponent } from './components/toprated-tv/toprated-tv.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ListComponent } from './components/list/list.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FilmsComponent,
    PopularComponent,
    LoginComponent,
    UpComingComponent,
    TopRatedComponent,
    NowPlayingComponent,
    DetailsComponent,
    AboutComponent,
    AiringTvComponent,
    OnAirComponent,
    PopularTvComponent,
    TopratedTvComponent,
    FavoritesComponent,
    ListComponent,
    ListMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
