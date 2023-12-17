import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "../../utils/data-transfer/data-transfer.service";
import {DtoInputTrip} from "./dtos/dto-input-trip";
import {TripSearchService} from "./trip-search.service";

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.css']
})
export class TripSearchComponent  {

  formData: any;

  constructor(private sharedDataService: DataTransferService, private _tripSearch: TripSearchService) {
  }

  ngOnInit() {
    this.sharedDataService.formData$.subscribe(formData => {
      this.formData = formData;
    });
  }


}
