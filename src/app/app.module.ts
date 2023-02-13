import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { AccessControlComponent } from './access-control/access-control.component';
import { CarpoolComponent } from './carpool/carpool.component';
import { LoginComponent } from './access-control/login/login.component';
import { SignupComponent } from './access-control/signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './carpool/home/home.component';
import { NavBarComponent } from './carpool/nav-bar/nav-bar.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    AccessControlComponent,
    CarpoolComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
