import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {

  genres: any[] = [];
  selectedGenreId: number | null = null;
  movies:any[]=[]
  activeGenre:any

  page = 1; // Initial page number
  @ViewChild('scrollingContainer') scrollingContainer!: ElementRef;
  constructor(private movieService: MovieService, public loginService: LoginService){
    this.getMovies()
  }
 
 
  ngOnInit() {
    // Fetch genre list when the component initializes
    this.movieService.getGenres().subscribe((data) => {
      this.genres = data.genres;
    });
  }


  
  getMovies(){
  this.movieService.discoverMovies(this.page).subscribe(
    (res)=>{
      console.log('resultas',res);
      this.movies.push(...res.results)
    },
    (err)=>{
      console.log(err);
 
    },
  )
  }
 

  filterMoviesByGenre(genreId: number | null) {
    this.activeGenre = genreId
    this.selectedGenreId = genreId;
    if (genreId === null) {
      this.getMovies(); // Fetch all movies
    } else {
      this.movieService.getMoviesByGenre(genreId).subscribe((data) => {
        this.movies = data.results;
      });
    }
  }





  onScroll() {
    this.page++;
    this.getMovies();
  }

}
