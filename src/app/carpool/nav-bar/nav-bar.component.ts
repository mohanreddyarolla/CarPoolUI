import { Component, OnInit } from '@angular/core';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';
import { ScreenType } from 'src/app/Models/Enums/ScreenType';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  UserName!:string

  constructor(private service:CarpoolServiceService)
  {

  }

  ngOnInit(): void {
    this.UserName ="John Wills"
  }


  OpenHome()
  {
    this.service.changeScreen(ScreenType.Home)
    this.service.ScreenChanged.next('')
  }

  OpenProfile()
  {

  }

  OpenMyRides()
  {
    this.service.changeScreen(ScreenType.MyRides)
    this.service.ScreenChanged.next('')
  }

  Logout()
  {
    this.service.changeScreen(ScreenType.SignUp)
    this.service.ScreenChanged.next('')

  }
}
