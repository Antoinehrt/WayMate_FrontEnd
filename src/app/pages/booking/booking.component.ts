import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  tripId: number = 0;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.tripId = parseInt(<string>params.get('id'), 10);

      console.log('Trip ID:', this.tripId);
    });
  }
}
