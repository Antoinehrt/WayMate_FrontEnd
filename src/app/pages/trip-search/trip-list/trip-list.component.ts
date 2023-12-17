import {Component, OnInit} from '@angular/core';
import {DtoInputTrip} from "../dtos/dto-input-trip";
import {TripSearchService} from "../trip-search.service";
import {DtoInputAddress} from "../dtos/dto-input-address";
import { forkJoin } from "rxjs";
import {DataTransferService} from "../../../utils/data-transfer/data-transfer.service";
@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  trips: DtoInputTrip[] = [];
  addressDepart: DtoInputAddress[] = [];
  addressDestination: DtoInputAddress[] = [];
  formData: any = [];

  constructor(private _tripSearch: TripSearchService, private sharedDataService: DataTransferService) {
  }
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.sharedDataService.formData$.subscribe(formData => {
        this.formData = formData;
    });
    this._tripSearch.getAll().subscribe(trips => {
      this.trips = trips;
      this.getAddress();
    });
  }

  getAddress(){
      forkJoin(
        this.trips.map(trip => this._tripSearch.fetchAddressById(trip.idStartingPoint))
      ).subscribe(addresses => {
        this.addressDepart = addresses;
      });
      forkJoin(
        this.trips.map(trip => this._tripSearch.fetchAddressById(trip.idDestination))
      ).subscribe(addresses => {
        this.addressDestination = addresses;
      });
    }
}
