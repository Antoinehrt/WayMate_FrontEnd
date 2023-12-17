import {Component, OnInit} from '@angular/core';
import {DtoInputTrip} from "../dtos/dto-input-trip";
import {TripSearchService} from "../trip-search.service";
import {DtoInputAddress} from "../dtos/dto-input-address";
import { forkJoin } from "rxjs";
@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  trips: DtoInputTrip[] = [];
  addressDepart: DtoInputAddress[] = [];

  constructor(private _tripSearch: TripSearchService) {
  }
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this._tripSearch.getAll().subscribe(trips => {
      this.trips = trips;
      console.log('Trips:', this.trips);
      this.getAddress();
    });
  }

  getAddress(){
      forkJoin(
        this.trips.map(trip => this._tripSearch.fetchAddressById(trip.idStartingPoint))
      ).subscribe(addresses => {
        this.addressDepart = addresses;
        console.log('Addresses:', this.addressDepart);
      });
    }
}
