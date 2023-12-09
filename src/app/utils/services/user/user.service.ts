import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoInputUser} from "./dtos/dto-input-user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static _URL_API: string = environment.BASE_URL_API + "user";

  constructor(private _httpClient: HttpClient) { }

  getAll():Observable<DtoInputUser[]>{
    return this._httpClient.get<DtoInputUser[]>(UserService._URL_API);
  }
}
