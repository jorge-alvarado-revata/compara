import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError }  from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private SERVER_URL = environment.apiUrl;
    constructor(private HttpClient: HttpClient) { }

    handleError(error: HttpErrorResponse) {
        let errorMessage = 'error desconocido.';
        if ( error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;

        } else {
            errorMessage = `Error code ${error.status}\nMessage:${error.message}`;        
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }


    public sendGetRequest(entidad: string): Observable<any> {
        let SERVER_FINAL:string = this.SERVER_URL + `${entidad}/`; 
        return this.HttpClient.get(SERVER_FINAL).pipe(catchError(this.handleError));
    }

    public sendGetRequestDetail(entidad: string, id: string): Observable<any> {
        let SERVER_FINAL:string = this.SERVER_URL + `${entidad}/${id}`; 
        return this.HttpClient.get(SERVER_FINAL).pipe(catchError(this.handleError));
    }

    public sendGetRequestQueryDetail(servicio: string, entidad: string, id: string): Observable<any> {
        let SERVER_FINAL:string = this.SERVER_URL + `${servicio}/?${entidad}=${id}`; 
        return this.HttpClient.get(SERVER_FINAL).pipe(catchError(this.handleError));
    }

}
