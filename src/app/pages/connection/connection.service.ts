import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {DtoOutputConnection} from "./dto/dto-output-connection";


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private static _URL_API_AUTH: string = environment.BASE_URL_API + "/authentication/login"
  constructor(private _httpClient: HttpClient) { }

  login(email: string, password: string): Observable<DtoOutputConnection> {
    return this._httpClient.get<DtoOutputConnection>(`${ConnectionService._URL_API_AUTH}?email=${email}&password=${password}`);
  }
}
