import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {RegistrationComponent} from "./pages/registration/registration.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { ConnectionComponent } from './pages/connection/connection.component';
import { PagesComponent } from './pages/pages.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripSearchComponent } from './pages/trip-search/trip-search.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DatePipe } from '@angular/common';
import { MatDialogModule} from "@angular/material/dialog";
import { PopupNotConnectedComponent } from './addon/popup-not-connected/popup-not-connected.component';
import {MatButtonModule} from "@angular/material/button";
import { BookingComponent } from './pages/booking/booking.component';
import {NavbarComponent} from "./addon/navbar/navbar.component";
import {FooterComponent} from "./addon/footer/footer.component";
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { MyTripComponent } from './pages/my-trip/my-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomePageComponent,
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    PagesComponent,
    ConnectionComponent,
    TripSearchComponent,
    FooterComponent,
    NotFoundComponent,
    PopupNotConnectedComponent,
    NotFoundComponent,
    BookingComponent,
    AdminPanelComponent,
    MyTripComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbCarouselModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
