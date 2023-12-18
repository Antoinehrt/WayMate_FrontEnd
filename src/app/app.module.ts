import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { ProfilComponent } from './account/profil/profil.component';
import { AboutComponent } from './about/about.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdministratorComponent } from './administrator/administrator.component';
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    ProfilComponent,
    AboutComponent,
    AboutusComponent,
    AdministratorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
