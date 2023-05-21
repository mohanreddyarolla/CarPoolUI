import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';
import { ScreenType } from 'src/app/Models/Enums/ScreenType';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  UserName!:string

  constructor(private service:CarpoolServiceService,private dialog:MatDialog)
  {
    this.UserName =this.service.user.UserName
  }

  ngOnInit(): void {
    this.UserName =this.service.user.UserName
  }


  OpenHome()
  {
    this.service.changeScreen(ScreenType.Home)
    this.service.ScreenChanged.next('')
  }

  OpenProfile()
  {
    this.dialog.open(ProfileComponent)
  }

  OpenMyRides()
  {
    this.service.changeScreen(ScreenType.MyRides)
    this.service.ScreenChanged.next('')
  }

  Logout()
  {
    localStorage.setItem('CarpoolApiToken','NULL')
    this.service.changeScreen(ScreenType.LogIn)
    this.service.ScreenChanged.next('')


  }
}
