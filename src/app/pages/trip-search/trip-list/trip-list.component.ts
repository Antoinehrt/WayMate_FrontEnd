import { Component, OnInit } from '@angular/core';
import { DtoInputTrip } from "../dtos/dto-input-trip";
import { TripSearchService } from "../trip-search.service";
import { DtoInputAddress } from "../dtos/dto-input-address";
import { forkJoin } from "rxjs";
import { DataTransferService } from "../../../utils/data-transfer/data-transfer.service";
import {DtoInputDriver} from "../dtos/dto-input-driver";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-trip-list',
    templateUrl: './trip-list.component.html',
    styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  groupedTrips: any[] = [];
  filteredTrips: any[] = [];
  formData: any = [];

  constructor(private _tripSearch: TripSearchService, private _sharedDataService: DataTransferService, private _datePipe: DatePipe) {}

  ngOnInit() {
    this._sharedDataService.formData$.subscribe(formData => {
      this.formData = formData;
    });
    this.getAllTripDetails();
  }
  getAllTripDetails() {
    this._tripSearch.getAllTripDetails().subscribe(data => {
      this.groupedTrips = this.groupTrips(data.trips, data.addresses, data.drivers);
      this.groupedTrips.sort((a, b) => new Date(a.trip.date).getTime() - new Date(b.trip.date).getTime());
      this.filterTrips();
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
  filterTrips() {
    this.filteredTrips = this.groupedTrips.filter(trip =>
      trip.departureAddress.city === this.formData.depart &&
      trip.destinationAddress.city === this.formData.destination &&
      this.isSameDate(new Date(trip.trip.date), new Date(this.formData.date))
    );
  }
  isSameDate(date1:Date, date2:Date) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
}
