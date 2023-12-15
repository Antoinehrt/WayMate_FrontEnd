import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private formDataSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  formData$: Observable<any> = this.formDataSubject.asObservable();

  updateFormData(formData: any) {
    this.formDataSubject.next(formData);
  }
}
