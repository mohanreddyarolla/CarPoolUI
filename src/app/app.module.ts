import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { RideBookingComponent } from './carpool/ride-booking/ride-booking.component';
import { Form1Component } from './carpool/form1/form1.component';
import { Form2Component } from './carpool/form2/form2.component';
import { RideMatchingCardComponent } from './carpool/ride-matching-card/ride-matching-card.component';
import { RideOfferingComponent } from './carpool/ride-offering/ride-offering.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MyRidesComponent } from './carpool/my-rides/my-rides.component';
import { BookingCardComponent } from './carpool/ride-matching-card/booking-card/booking-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { RideOfferCardComponent } from './carpool/ride-offering/ride-offer-card/ride-offer-card.component';
import { MessageComponent } from './carpool/message/message.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProfileComponent } from './carpool/profile/profile.component';

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
    RideBookingComponent,
    Form1Component,
    Form2Component,
    RideMatchingCardComponent,
    RideOfferingComponent,
    MyRidesComponent,
    BookingCardComponent,
    RideOfferCardComponent,
    MessageComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
