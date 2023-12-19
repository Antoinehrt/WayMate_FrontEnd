import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "../../utils/data-transfer/data-transfer.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.css']
})
export class TripSearchComponent implements OnInit {
  minDate: string;
  formData: any = [];

  constructor(private _fb: FormBuilder, private _sharedDataService: DataTransferService) {
    const currentDate = new Date();
    this.minDate = currentDate.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this._sharedDataService.formData$.subscribe(formData => {
      this.formData = formData;
    });
    this.formSetValue();
  }

  form: FormGroup = this._fb.group({
    depart: ['', [Validators.required]],
    destination: ['', [Validators.required]],
    date: ['', [Validators.required]],
    people: ['', [Validators.required, Validators.pattern("^\\d+$")]],
  });

  formSubmit(){
    const formData = this.form.value;
    this._sharedDataService.updateFormData(formData);
  }
  formSetValue(){
    this.form.setValue({
      depart: this.formData.depart,
      destination: this.formData.destination,
      date: this.formData.date,
      people: this.formData.people,

    });
  }

}
