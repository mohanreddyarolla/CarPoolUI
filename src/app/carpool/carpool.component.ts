import { Component, OnInit } from '@angular/core';
import { CarpoolServiceService } from '../Service/carpool-service.service';
import { ScreenType } from '../Models/Enums/ScreenType';

@Component({
  selector: 'app-carpool',
  templateUrl: './carpool.component.html',
  styleUrls: ['./carpool.component.css']
})
export class CarpoolComponent implements OnInit{

  OpenCarpoolHome!:boolean
  OpenHome!:boolean
  OpenRideBookingComponent!:boolean
  OpenRideOfferingComponent!:boolean
  OpenAccessControl!:boolean
  OpenMyRidesComponent!:boolean

  constructor(private service:CarpoolServiceService)
  {
    service.ScreenChanged.subscribe(()=>
    {
      this.changeScreen();
    })
  }

  ngOnInit(): void {
    this.OpenAccessControl = true
    this.OpenCarpoolHome= false
    this.OpenHome = false
    this.OpenRideBookingComponent = false
    this.OpenRideOfferingComponent = false

  }

  changeScreen()
  {

    const currentScreen = this.service.CurrentScreen
    this.closeAllScreens()

    switch(currentScreen)
    {
      case ScreenType.Home:
        this.OpenCarpoolHome= true
        this.OpenHome = true
        break

      case ScreenType.RideBooking:
        this.OpenRideBookingComponent = true
        break

      case ScreenType.RideOffering:
        this.OpenRideOfferingComponent = true
        break

      case ScreenType.MyRides:
        this.OpenMyRidesComponent = true
        break

      case ScreenType.SignUp:
        this.OpenCarpoolHome= false
        this.OpenAccessControl = true


    }

  }

  closeAllScreens()
  {
    this.OpenAccessControl = false
    this.OpenHome = false
    this.OpenRideBookingComponent = false
    this.OpenRideOfferingComponent = false
    this.OpenMyRidesComponent = false
  }

}
