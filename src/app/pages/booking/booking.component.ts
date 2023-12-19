import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  tripIdS: string | null = "";
  tripIdI: number = 0;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.tripIdS = params.get('id');
      if (typeof this.tripIdS === "string") {
        this.tripIdI = parseInt(this.tripIdS, 10);
      }
      console.log('Trip ID:', this.tripIdI);
    });
  }
}
