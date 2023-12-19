import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookingService} from "./booking.service";
import {DtoInputTrip} from "./dtos/dto-input-trip";
import {DtoInputAddress} from "./dtos/dto-input-address";
import {DtoInputDriver} from "./dtos/dto-input-driver";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  tripId: number = 0;
  trip!: DtoInputTrip;
  addressDepart!: DtoInputAddress;
  addressDestination!: DtoInputAddress;
  driver!: DtoInputDriver;

  constructor(private _route: ActivatedRoute, private _bookingService: BookingService) {
  }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.tripId = parseInt(<string>params.get('id'), 10);
      console.log('Trip ID:', this.tripId);
      this.getTripById(this.tripId);
    });
  }

  getTripById(id:number){
    this._bookingService.getAllTrip(id).subscribe(
      (response: DtoInputTrip) => { // Assuming DtoOutputTrip is the correct type
        this.trip = response as DtoInputTrip;
        console.log('Trip Details:', this.trip);
        this.getAddressById(this.trip.idStartingPoint,this.trip.idDestination);
        this.getDriverById(this.trip.idDriver);
      },
      error => {
        console.error('Error fetching trip details:', error);
      }
    );
  }

  getAddressById(idDepart:number, idDest:number) {
    this._bookingService.getAllAddress(idDepart).subscribe(
      response => {
        this.addressDepart = response;
        console.log(response);
      },
      error => {
        console.error('Error fetching trip details:', error);
      }
    );
    this._bookingService.getAllAddress(idDest).subscribe(
      response => {
        this.addressDestination = response;
        console.log(response);
      },
      error => {
        console.error('Error fetching trip details:', error);
      }
    );
  }

  getDriverById(idDriver:number){
    this._bookingService.getAllDriver(idDriver).subscribe(
      response => {
        this.driver = response;
        console.log(response);
      },
      error => {
        console.error('Error fetching trip details:', error);
      }
    );
  }
}
