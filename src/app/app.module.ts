import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UtilsComponent } from './utils/utils.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    RegistrationComponent,
    UtilsComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
