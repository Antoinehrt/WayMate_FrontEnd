import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {DtoOutputToken} from "./dto/dto-output-token";
import {Observable} from "rxjs";
import {DtoOutputConnection} from "./dto/dto-output-connection";
import {DtoInputToken} from "./dto/dto-input-token";


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private static _URL_API_AUTH: string = environment.BASE_URL_API + "/authentication/login";
  private static _URL_API_TOKEN: string = environment.BASE_URL_API + "/authentication/token";
  private readonly TOKEN_NAME: string = 'WayMateToken';
  constructor(private _httpClient: HttpClient) { }

  login(email: string, password: string): Observable<DtoOutputConnection> {
    return this._httpClient.get<DtoOutputConnection>(`${ConnectionService._URL_API_AUTH}?email=${email}&password=${password}`);
  }

  buildToken(dto: DtoInputToken): Observable<DtoOutputToken>{
    return this._httpClient.post<DtoOutputToken>(ConnectionService._URL_API_TOKEN, dto);
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem(this.TOKEN_NAME);
  }
}
