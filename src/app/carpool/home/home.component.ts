import { Component } from '@angular/core';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';
import { ScreenType } from 'src/app/Models/Enums/ScreenType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  UserName!:string

  constructor(private service:CarpoolServiceService)
  {

  }

  ngOnInit(): void {
    this.UserName =this.service.user.UserName
  }


  OpenBookRide()
  {
    this.service.changeScreen(ScreenType.RideBooking)
  }

  OpenOfferRide()
  {
    console.log('In offer')
    this.service.changeScreen(ScreenType.RideOffering)
  }
}
