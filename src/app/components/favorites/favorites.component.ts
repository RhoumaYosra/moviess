import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {


  favoriteMovies: any[] = [];
  accountId: any;
 
  constructor(private movieService: MovieService) {}
 
  ngOnInit() {
 
    this.loadFavoriteMovies();
  }
 
  loadFavoriteMovies() {
    const accountInfo = JSON.parse(sessionStorage.getItem('account') || '{}');
    const accountId = accountInfo.id || '';
 
    if (!accountId) {
      // Handle the case where accountId is not available
      console.error('Account ID not found in session storage.');
        }
       console.log(accountId);
 
    this.movieService.getFavoriteMovies(accountId).subscribe((movies: any) => {
     
      this.favoriteMovies = movies.results;
      console.log(movies);
    });
  }

}

