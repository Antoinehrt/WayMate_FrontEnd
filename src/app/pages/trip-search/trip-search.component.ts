import {Component, Input} from '@angular/core';
import {HomePageService} from "../home-page/home-page.service";

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.css']
})
export class TripSearchComponent {
  donneesFormulaire: any;

  constructor(private sharedDataService: HomePageService) {}

  ngOnInit() {
    // Abonnez-vous au service pour détecter les changements dans les données du formulaire
    this.sharedDataService.formData$.subscribe(formData => {
      this.donneesFormulaire = formData;
    });
  }
}
