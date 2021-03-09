import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError }  from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GraphapiService {

    private SERVER_URL = "http://127.0.0.1:8000/compara/comparagraph/";

    constructor(
        private HttpClient: HttpClient) { }

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

    public get(guia:number, plan:number) {
        let SERVER_URL_PARAM = this.SERVER_URL + `${guia}/${plan}/`;
        return this.HttpClient.get(SERVER_URL_PARAM);
    }

    public sendGetRequest() {
        return this.HttpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
    }

}
