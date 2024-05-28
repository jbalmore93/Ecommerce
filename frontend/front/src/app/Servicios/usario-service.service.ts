import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsarioServiceService {

  private api = "http://localhost:8080/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    }
    )
  }

  constructor(private httpClient: HttpClient) { }

  index(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(
      this.api+'usuario',this.httpOptions
    ).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;

    }else{
      errorMessage = 'Error Codigo: ${error.status}\nMessage: ${error.message}';
    }
    return throwError(errorMessage);
  }
}
