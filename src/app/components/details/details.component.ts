import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  movieId: any;
  movie: any; // Your movie details structure
  genres: any[] = [];
  cast: any[] = [];
  trailers: any[] = [];
  recommendedMovies: any[] = [];
  showVideo = false;
  favorite=false;
  isinwatch=false
  showMessage = false;
  
  constructor(private route: ActivatedRoute, private movieService: MovieService,private sanitizer:DomSanitizer) {  this.fetchCastData(); }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = +params['id'];
      console.log(params['id']);
      
      this.movieService.getMovieDetails(params['id']).subscribe((data) => {
        this.movie = data;
        console.log(data);
        
      });

      // Fetch genres
      this.movieService.getGenres().subscribe((data) => {
        this.genres = data.genres;
      });

      // Fetch credits (cast and crew)
      this.movieService.getMovieCredits(params['id']).subscribe((data) => {
        this.cast = data.cast; // Assuming 'cast' is an array of cast members
        // Process crew data if needed
      });

      // Fetch trailers
      this.movieService.getMovieTrailers(params['id']).subscribe((data) => {
        this.trailers = data.results; // Assuming 'results' is an array of trailers
        // Process trailers data if needed
      });

      // Fetch recommended movies
      this.movieService.getRecommendedMovies(this.movieId).subscribe((data) => {
        this.recommendedMovies = data.results; // Assuming 'results' is an array of recommended movies
        // Process recommended movies data if needed
      });

      // Add processing of other information as needed
      this.movieService.getMovieVideos(this.movieId).subscribe((videosData: any) => {
        console.log(videosData)
        if (videosData.results && videosData.results.length > 0) {
          this.trailers = videosData.results[0].key;
        }
      });

      const accountInfo = JSON.parse(sessionStorage.getItem('account') || '{}');
      const accountId = accountInfo.id || '';
   
      if (!accountId) {
        // Handle the case where accountId is not available
        console.error('Account ID not found in session storage.');
          }
         console.log(accountId);
   
      this.movieService.getFavoriteMovies(accountId).subscribe((movies: any) => {
       
        for (let movie of  movies.results) {
          if (movie.id == params['id']) 
          this.favorite=true
          
        }
      });


     this.movieService.getwatchList(accountId).subscribe((movies: any) => {
       
      for (let movie of  movies.results) {
        if (movie.id == params['id']) 
        this.isinwatch=true
        
      }
    });


    });

      
  
    
  }

  getSafeVideoUrl(): SafeResourceUrl {
    const videoUrl = 'https://www.youtube.com/embed/' + this.trailers;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  getStars(): number[] {
    const maxStars = 5; // Maximum number of stars to display
    return Array(maxStars).fill(0);
  }

  getStarColor(index: number): string {
    const avgRating = Math.floor(this.movie.vote_average / 2);
    return index < avgRating ? 'yellow' : 'gray'; // Change 'yellow' to your desired color
  }
  
  getAverageRating(): number {
    return Math.floor(this.movie.vote_average / 2);
  }
  
  

  getGenreName(genreId: number): string {
    return this.genres[genreId] || 'Unknown Genre';
  }




  showAllCast: boolean = false;
  showAllMovie: boolean = false;

  fetchCastData() {
    this.movieService.getMovieCredits(this.movieId).subscribe((data) => {
      this.cast = data.cast; // Assuming 'cast' is an array of cast members
      // Process crew data if needed
    });
  }

  toggleShowAllCast() {
    this.showAllCast = !this.showAllCast;
  }

  toggleShowAllMovie() {
    this.showAllMovie = !this.showAllMovie;
  }




  isFavorite=false

  addToFavorites(movieId: number,isFav:any) {
    // Retrieve accountId from session storage
    const accountInfo = JSON.parse(sessionStorage.getItem('account') || '{}');
    const accountId = accountInfo.id || ''; // Assuming 'id' is the key for accountId
 
    if (!accountId) {
      // Handle the case where accountId is not available
      console.error('Account ID not found in session storage.');
        }
       console.log(accountId);
 
     this.movieService.addToFavorites(movieId, accountId,isFav).subscribe((res: any) => {
      console.log(res);
      this.favorite = isFav;
     
    },(er: any) => {
      console.log(er);
     
    });
  }


  addwachlist(movieId: number,isin:any) {
    // Retrieve accountId from session storage
    const accountInfo = JSON.parse(sessionStorage.getItem('account') || '{}');
    const accountId = accountInfo.id || ''; // Assuming 'id' is the key for accountId
 
    if (!accountId) {
      // Handle the case where accountId is not available
      console.error('Account ID not found in session storage.');
        }
       console.log(accountId);
 
     this.movieService.addToWach(movieId, accountId,isin).subscribe((res: any) => {
      console.log(res);
      this.isinwatch = isin;
     
    },(er: any) => {
      console.log(er);
     
    });
  }

  showMessageAfterDelay(value: boolean): void {
    // Set a small delay before showing or hiding the message
    setTimeout(() => {
      this.showMessage = value;
    }, 50); }

  
}
