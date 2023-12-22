import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegistrationService} from "../registration/registration.service";
import {Router} from "@angular/router";
import {CreateTripService} from "./create-trip.service";

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit{

  minDate: string;

  form:FormGroup = this._fb.group({
    trip:this._fb.group({
      dateTrip: ['', [Validators.required]],
      price: ['', [Validators.required]],
      smoke: ['', [Validators.required]],
      petFriendly: ['', [Validators.required]],
      luggage: ['', [Validators.required]],
      airConditioning: ['', [Validators.required]],
      driverMessage: ['', [Validators.required]]
    }),
    addressDepart:this._fb.group({
      street:['', [Validators.required]],
      postalCode:['', [Validators.required]],
      city:['', [Validators.required]],
      number: ['', [Validators.required]],
      country:['', [Validators.required]]
    }),
    addressDest:this._fb.group({
      street:['', [Validators.required]],
      postalCode:['', [Validators.required]],
      city:['', [Validators.required]],
      number: ['', [Validators.required]],
      country:['', [Validators.required]]
    })
  });

  constructor(private _fb: FormBuilder, private _createTripService: CreateTripService, private _route:Router) {
    const currentDate = new Date();
    const minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()+1);
    this.minDate = minDate.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.setFormValue();
  }

  onSubmit(){

  }

  setFormValue() {
    this.form.setValue({
      trip:{
        dateTrip: this.minDate,
        price:"",
        smoke: "true",
        petFriendly:"true",
        luggage:"true",
        airConditioning:"true",
        driverMessage:""
      },
      addressDepart:{
        street:"",
        number:"",
        postalCode:"",
        city:"",
        country:""
      },
      addressDest:{
        street:"",
        number:"",
        postalCode:"",
        city:"",
        country:""
      }
    });
  }
}
