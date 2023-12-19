import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookingService} from "./booking.service";
import {DtoInputTrip} from "./dtos/dto-input-trip";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  tripId: number = 0;
  trip!: DtoInputTrip;

  constructor(private _route: ActivatedRoute, private _bookingService: BookingService) {
  }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.tripId = parseInt(<string>params.get('id'), 10);
      console.log('Trip ID:', this.tripId);
    });
    this.getTripById(this.tripId);
  }

  getTripById(id:number){
    this._bookingService.getAllTrip(id).subscribe(
      response => {
        this.trip = response;
        console.log(response);
      },
      error => {
        console.error('Error fetching trip details:', error);
      }
    );
  }
}
