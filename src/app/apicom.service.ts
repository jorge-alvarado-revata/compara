import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError }  from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class ApicomService {

    private SERVER_URL = environment.apiUrl + "comparagraph/";

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


    public sendGetRequest(guia: string, plan:string): Observable<any> {
        let SERVER_FINAL:string = this.SERVER_URL + `${guia}/${plan}/`; 
        return this.HttpClient.get(SERVER_FINAL).pipe(catchError(this.handleError));
    }

}
