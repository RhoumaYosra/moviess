import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TVService {

  private apiKey = '95e612b1f315463a44e379f9038653ea';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopulartv(): Observable<any> {
    const url = `${this.apiUrl}/tv/popular?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getAiring(): Observable<any> {
    const url = `${this.apiUrl}/tv/airing_today?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }


  getOnAir(): Observable<any> {
    const url = `${this.apiUrl}/tv/on_the_air?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getTopRated(): Observable<any> {
    const url = `${this.apiUrl}/tv/top_rated?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
