import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '95e612b1f315463a44e379f9038653ea';
  private apiUrl = 'https://api.themoviedb.org/3';
  movieDetails:any;
  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }


  getUpComing(): Observable<any> {
    const url = `${this.apiUrl}/movie/upcoming?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
  getTopRated(): Observable<any> {
    const url = `${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getNow(): Observable<any> {
    const url = `${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getGenres(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`);
  }


   // Fetch cast and crew for a movie by ID
   getMovieCredits(movieId: any): Observable<any> {
    console.log('movieId',movieId);
    
    return this.http.get<any>(`${this.apiUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`);
  }

  // Fetch movie trailers by ID
  getMovieTrailers(movieId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`);
  }

  // Fetch recommended movies for a given movie by ID
  getRecommendedMovies(movieId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/${movieId}/recommendations?api_key=${this.apiKey}`);
  }


  discoverMovies(page=1): Observable<any> {
    const url = `${this.apiUrl}/discover/movie`;
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('page', page);
    return this.http.get(url, { params });
  }


  getMoviesByGenre(genreId: number): Observable<any> {
    const url = `${this.apiUrl}/discover/movie`;
    const params = { api_key: this.apiKey, with_genres: genreId.toString() };
  
    return this.http.get<any>(url, { params });
  }




addToFavorites(movieId: number, accountId: string,isFav:any): Observable<any> {
    const url = `https://api.themoviedb.org/3/account/${accountId}/favorite`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
 
   
    const params ={
    api_key: this.apiKey,
    session_id:  JSON.parse(sessionStorage.getItem('session')! ).session_id
  }
    const body = {
      media_type: 'movie',
      media_id: movieId,
      favorite: isFav,
    };
    return this.http.post(url, body, { params, headers });
  }


  addToWach(movieId: number, accountId: string,isin:any): Observable<any> {
    const url = `https://api.themoviedb.org/3/account/${accountId}/watchlist`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params ={
    api_key: this.apiKey,
    session_id:  JSON.parse(sessionStorage.getItem('session')! ).session_id
  }
    const body = {
      media_type: 'movie',
      media_id: movieId,
      watchlist: isin,
    };
    return this.http.post(url, body, { params, headers });
  }

  getFavoriteMovies(accountId: string): Observable<any> {
    const apiUrl = `https://api.themoviedb.org/3/account/${accountId}/favorite/movies`;
    const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('session_id', JSON.parse(sessionStorage.getItem('session')!).session_id);
 
    return this.http.get(apiUrl, { params });
}

getwatchList(accountId: string): Observable<any> {
  const apiUrl = `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies`;
  const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('session_id', JSON.parse(sessionStorage.getItem('session')!).session_id);

  return this.http.get(apiUrl, { params });
}

searchMovies(searchTerm: string): Observable<any> {
  console.log(searchTerm);
  
  const url = `https://api.themoviedb.org/3/search/movie`;
  const params = {
    api_key: this.apiKey,
    query: searchTerm
  };

  return this.http.get(url, { params });
}

getMovieVideos(movieId: number): Observable<any> {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.apiKey}`;
  return this.http.get(url);
}


}
