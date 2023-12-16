import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "../../utils/data-transfer/data-transfer.service";
import {DtoInputTrip} from "./dtos/dto-input-trip";
import {TripSearchService} from "./trip-search.service";

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.css']
})
export class TripSearchComponent implements OnInit {
  trips: DtoInputTrip[] = [];
  formData: any;

  constructor(private sharedDataService: DataTransferService, private _tripSearch: TripSearchService) {
  }

  ngOnInit() {
    this.getAll();
    this.sharedDataService.formData$.subscribe(formData => {
      this.formData = formData;
    });
  }

  getAll(){
    this._tripSearch.getAll().subscribe(trips => this.trips = trips);
  }
}
