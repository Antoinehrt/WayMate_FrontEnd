import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DtoInputTrip} from "../../booking/dtos/dto-input-trip";
import {MyTripService} from "../my-trip.service";
import {DtoInputAddress} from "../../booking/dtos/dto-input-address";

@Component({
  selector: 'app-my-trip-details',
  templateUrl: './my-trip-details.component.html',
  styleUrls: ['./my-trip-details.component.css']
})
export class MyTripDetailsComponent implements OnInit{
  tripId: number = 0;
  addressDepart!: DtoInputAddress;
  addressDestination!: DtoInputAddress;
  trip!: DtoInputTrip;
  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.tripId = parseInt(<string>params.get('id'), 10);
      this.getTripById(this.tripId);
    });
  }

  constructor(private _route: ActivatedRoute, private _myTripService: MyTripService) {
  }


  getTripById(id:number){
    this._myTripService.getTrip(id).subscribe(
      (response: DtoInputTrip) => { // Assuming DtoOutputTrip is the correct type
        this.trip = response as DtoInputTrip;
        this.getAddressById(this.trip.idStartingPoint,this.trip.idDestination);
      },
      error => {
        console.error('Error fetching trip details:', error);
      }
    );
  }

  getAddressById(idDepart:number, idDest:number) {
    this._myTripService.getAddress(idDepart).subscribe(
      response => {
        this.addressDepart = response;
      },
      error => {
        console.error('Error fetching addressDep details:', error);
      }
    );
    this._myTripService.getAddress(idDest).subscribe(
      response => {
        this.addressDestination = response;
      },
      error => {
        console.error('Error fetching addressDest details:', error);
      }
    );
  }
}
