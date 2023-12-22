import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {ConnectionComponent} from "./pages/connection/connection.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {TripSearchComponent} from "./pages/trip-search/trip-search.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {BookingComponent} from "./pages/booking/booking.component";
import {ProfileComponent} from "./pages/profile/profile.component";


const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "tripSearch", component: TripSearchComponent},
  {path: "booking/:id", component: BookingComponent},
  //{path: "adminPanel", component:AdminPanelComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "connection", component: ConnectionComponent},
  {path: "profile", component: ProfileComponent},
  {path: "not-found", component: NotFoundComponent},
  {path: "**", redirectTo:"/not-found"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
