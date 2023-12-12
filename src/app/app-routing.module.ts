import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {ConnectionComponent} from "./pages/connection/connection.component";


const routes: Routes = [
  {path: "registration", component: RegistrationComponent},
  {path: "connection", component: ConnectionComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
