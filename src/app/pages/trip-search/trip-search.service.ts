import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoInputTrip} from "./dtos/dto-input-trip";
import {DtoInputAddress} from "./dtos/dto-input-address";

@Injectable({
  providedIn: 'root'
})
export class TripSearchService {
  private static _URL_API_TRIP: string = environment.BASE_URL_API + "/trip";
  private static _URL_API_ADDRESS: string = environment.BASE_URL_API + "/address";


  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<DtoInputTrip[]> {
    return this._httpClient.get<DtoInputTrip[]>(TripSearchService._URL_API_TRIP);
  }

    fetchAddressById(id: number): Observable<DtoInputAddress> {
    return this._httpClient.get<DtoInputAddress>(`${TripSearchService._URL_API_ADDRESS}/${id}`);
  }
}
