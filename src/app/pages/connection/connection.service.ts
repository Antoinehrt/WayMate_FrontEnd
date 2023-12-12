import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private static _URL_API_AUTH: string = environment.BASE_URL_API + "/authentification"
  constructor(private _httpClient: HttpClient) { }

  login(email: string, password: string): boolean {
    this._httpClient.get<boolean>(ConnectionService._URL_API_AUTH)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(error => {
          console.error('An error has occurred during the HTTP request.', error);
          return of(false);
        })
      )
      .subscribe(result => {
        return result;
      });
    return false;
  }
}
