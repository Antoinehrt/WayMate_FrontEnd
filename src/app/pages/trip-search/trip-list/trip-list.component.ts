import { Component, OnInit } from '@angular/core';
import { DtoInputTrip } from "../dtos/dto-input-trip";
import { TripSearchService } from "../trip-search.service";
import { DtoInputAddress } from "../dtos/dto-input-address";
import { forkJoin } from "rxjs";
import { DataTransferService } from "../../../utils/data-transfer/data-transfer.service";
import {DtoInputDriver} from "../dtos/dto-input-driver";

@Component({
    selector: 'app-trip-list',
    templateUrl: './trip-list.component.html',
    styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  groupedTrips: any[] = [];

  constructor(private _tripSearch: TripSearchService) {}

  ngOnInit() {
    this.getAllTripDetails();
  }

  getAllTripDetails() {
    this._tripSearch.getAllTripDetails().subscribe(data => {
      this.groupedTrips = this.groupTrips(data.trips, data.addresses, data.drivers);
    });
  }

  private groupTrips(trips: DtoInputTrip[], addresses: DtoInputAddress[], drivers: DtoInputDriver[]): any[] {
    return trips.map(trip => {
      return {
        trip: trip,
        departureAddress: addresses.find(addr => addr.id === trip.idStartingPoint),
        destinationAddress: addresses.find(addr => addr.id === trip.idDestination),
        driver: drivers.find(driver => driver.id === trip.idDriver)
      };
    });
  }
}
