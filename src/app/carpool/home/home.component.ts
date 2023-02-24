import { Component } from '@angular/core';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';
import { ScreenType } from 'src/app/Models/Enums/ScreenType';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  UserName!:string

  constructor(private service:CarpoolServiceService,private router:Router)
  {

  }

  ngOnInit(): void {
    this.UserName =this.service.user.UserName
  }


  OpenBookRide()
  {
    this.service.changeScreen(ScreenType.RideBooking)
    this.router.navigate(['/Home/Book'])
  }

  OpenOfferRide()
  {

    this.service.changeScreen(ScreenType.RideOffering)
    this.router.navigate(['/Home/Offer'])
  }
}
