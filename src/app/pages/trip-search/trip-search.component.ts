import {Component, Input, OnInit} from '@angular/core';
import {DataTransferService} from "../../utils/data-transfer/data-transfer.service";

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.css']
})
export class TripSearchComponent implements OnInit {
  formData: any;

  constructor(private sharedDataService: DataTransferService) {}

  ngOnInit() {
    this.sharedDataService.formData$.subscribe(formData => {
      this.formData = formData;
    });
  }
}
