import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './access-control/signup/signup.component';
import { CarpoolComponent } from './carpool/carpool.component';
import { HomeComponent } from './carpool/home/home.component';
import { MyRidesComponent } from './carpool/my-rides/my-rides.component';
import { NavBarComponent } from './carpool/nav-bar/nav-bar.component';
import { RideBookingComponent } from './carpool/ride-booking/ride-booking.component';
import { RideOfferingComponent } from './carpool/ride-offering/ride-offering.component';

const routes: Routes = [
  {path:'',component:CarpoolComponent,children:[
      {path:'',component:SignupComponent},
      {path:'/SignUp',component:SignupComponent},
      {path:'/LogIn',component:SignupComponent}
  ]},
  {
    path:'/Home',component:NavBarComponent,children:[
      {path:'',component:HomeComponent},
      {path:'/Book',component:RideBookingComponent},
      {path:'/Offer',component:RideOfferingComponent},
      {path:'/MyRides',component:MyRidesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
