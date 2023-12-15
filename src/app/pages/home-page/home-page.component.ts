import {Component, EventEmitter, Output} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HomePageService} from "./home-page.service";
import {AppRoutingModule} from "../../app-routing.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomePageComponent {
  @Output()
  formSubmited: EventEmitter<any> = new EventEmitter();
  ImagePath: string;
  minDate: string;

  form: FormGroup = this._fb.group({
    depart: ['', [Validators.required]],
    destination: ['', [Validators.required]],
    date: ['', [Validators.required]],
    people: ['', [Validators.required, Validators.pattern("^\\d+$")]],
  });
  constructor(private _fb: FormBuilder, private _homePageService:HomePageService, private _route:Router,config: NgbCarouselConfig) {
    this.ImagePath = "assets/img/waymateHome.png";
    const currentDate = new Date();
    this.minDate = currentDate.toISOString().split('T')[0];

    config.interval = 5500;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;
    config.showNavigationArrows = false;
  }

  soumettreFormulaire() {
    const formData = this.form.value;
    // Envoyer les données au service
    this._homePageService.updateFormData(formData);

    this._route.navigate(['/tripSearch']);
  }
}
