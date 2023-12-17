import {Component, OnInit} from '@angular/core';
import {DtoInputTrip} from "../dtos/dto-input-trip";
import {DataTransferService} from "../../../utils/data-transfer/data-transfer.service";
import {TripSearchService} from "../trip-search.service";

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  trips: DtoInputTrip[] = [];

  constructor(private _tripSearch: TripSearchService) {
  }

    ngOnInit() {
    this.getAll();
  }
  getAll(){
    this._tripSearch.getAll().subscribe(trips => this.trips = trips);
  }
}
