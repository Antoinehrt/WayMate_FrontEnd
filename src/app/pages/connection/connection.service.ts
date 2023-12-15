import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {DtoOutputConnection} from "./dto/dto-output-connection";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private static _URL_API_AUTH: string = environment.BASE_URL_API + "/authentication/login";
  private readonly TOKEN_NAME: string = 'WayMateToken';
  constructor(private _httpClient: HttpClient) { }

  login(email: string, password: string): Observable<string> {
    return this._httpClient.get(`${ConnectionService._URL_API_AUTH}?email=${email}&password=${password}`, { responseType: 'text' });
  }


  storeToken(token: string){
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  getToken(){
    return localStorage.getItem(this.TOKEN_NAME);
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem(this.TOKEN_NAME);
  }
}
