import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiKey = '95e612b1f315463a44e379f9038653ea';
  private apiUr = 'https://api.themoviedb.org/3';
   isLogged: boolean = false;

   username:any 


  constructor(private http: HttpClient) { 
    if(sessionStorage.getItem('account'))
    this.username =JSON.parse(sessionStorage.getItem('account')!).username 
  else this.username= ""
  }
  getRequestToken(): Observable<any> {
    const url = `${this.apiUr}/authentication/token/new`;
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get(url, { params });
  }

  login(username: string, password: string, requestToken: string): Observable<any> {
    const url = `${this.apiUr}/authentication/token/validate_with_login`;
    const params = new HttpParams().set('api_key', this.apiKey);
    const body = {
      username: username,
      password: password,
      request_token: requestToken
    };

    return this.http.post(url, body,{params});
  }

  setLoginStatus(status: boolean): void {
    this.isLogged = status;
  }

  getLoginStatus(): boolean {
    return this.isLogged;
  }

  createSession(requestToken: string): Observable<any> {
    const url = `${this.apiUr}/authentication/session/new`;
    const params = new HttpParams().set('api_key', this.apiKey);

    const body = { request_token: requestToken };

    return this.http.post<any>(url, body,{params});
  }

  getAccountInfo(sessionId: string): Observable<any> {
    const url = `${this.apiUr}/account`;
    const params = { session_id: sessionId, api_key: this.apiKey };

    return this.http.get<any>(url, { params });
  }
  logout(sessionId: string): Observable<any> {
    const url = `${this.apiUr}/authentication/session`;
    const params = { session_id: sessionId, api_key: this.apiKey };

    return this.http.delete<any>(url, { params });
  }
}
