import { Injectable } from '@angular/core';
import { Player } from './player';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Players } from '../../../backend/models/players';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  endpoint: string = 'http://localhost:4000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add student
  CreatePlayer(data: Player): Observable<any> {
    console.log('addstudent!')
    let API_URL = `http://localhost:4000/players/add`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all players
  GetPlayers():Observable <Player[]> {
    let URI = `${this.endpoint}/players/all`;
    console.log("service is working");
    return this.http.get(URI)
    .pipe(map(res => res))
    .pipe(map(res => <Player[]>res));
  }

  // Get player
  GetPlayer(id): Observable<any> {
    let API_URL = `${this.endpoint}/read-player/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update player
  UpdatePlayer(id, data: Player): Observable<any> {
    let API_URL = `${this.endpoint}/update-player/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete player
  DeletePlayer(id): Observable<any> {
    var API_URL = `${this.endpoint}/delete-player/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}