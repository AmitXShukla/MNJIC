import { Injectable } from '@angular/core';
import { STUDENTS } from './mock.data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class BackendService {
  students = STUDENTS["0"]["data"];
  private _backendUrl = "http://elisheducation.com/MNJIC/connection_api.php?action=f";

  constructor(private _http: HttpClient) {}

  getData() {
    return this._http.get(this._backendUrl)
      .pipe(
        tap(_ => this.log('test')),
        catchError(this.handleError())
      );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    console.log("error");
    return null;
  }
  private log(message: string) {
    console.log("log");
  }

}