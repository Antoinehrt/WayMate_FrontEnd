import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EnvironnmentsComponent } from './environnments/environnments.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { UtilsComponent } from './utils/utils.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    RegistrationComponent,
    EnvironnmentsComponent,
    EnvironmentsComponent,
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
