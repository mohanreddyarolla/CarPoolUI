import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';
import { ScreenType } from 'src/app/Models/Enums/ScreenType';
import { Locations } from 'src/app/Models/DataModels/Locations';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Form1 } from 'src/app/Models/Form1';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})

export class Form1Component  implements OnInit{


  LocationsList!:Locations[]
  form1!:FormGroup
  SelectedTime='5am - 9am'

  constructor(private service:CarpoolServiceService){

  }


  RideType = ''
  ScreenType = ScreenType;
  CurrentScreen = this.service.CurrentScreen;

  ngOnInit()
  {

    this.form1 = new FormGroup({
      FromLocation: new FormControl('',[Validators.required]),
      ToLocation:new FormControl('',[Validators.required]),
      Date:new FormControl('',[Validators.required,Validators.pattern('^(((0[1-9]|[12][0-9]|30)[/]?(0[13-9]|1[012])|31[/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[/]?02)[/]?[0-9]{4}|29[/]?02[/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$')]),

    })

    this.LocationsList = this.service.Locations


    this.LocationsList.forEach(location=>
      {
        console.log(location,location.LocationName)
      })
    console.log(this.LocationsList)

    if(this.service.CurrentScreen == ScreenType.RideOffering)
    {
      this.RideType = 'Offer a Ride'
    }
    else
    {
      this.RideType = 'Book a Ride'
    }
  }

  OpenBookRide()
  {
    this.service.changeScreen(ScreenType.RideBooking)
    this.service.ScreenChanged.next('')
  }

  OpenOfferRide()
  {
    this.service.changeScreen(ScreenType.RideOffering)
    this.service.ScreenChanged.next('')
  }

  getFormData()
  {
    // this.service.Form1Data = new Form1()
    console.log(this.form1)
    this.service.Form1Data.FromLocationId = this.form1.get('FromLocation')?.value
    this.service.Form1Data.ToLocationId = this.form1.get('ToLocation')?.value
    this.service.Form1Data.Date = this.form1.get('Date')?.value
    this.service.Form1Data.Time = this.SelectedTime

  }

  OpenNextForm()
  {
    this.getFormData()
    this.service.OpenForm2.next('')
    console.log( this.service.Form1Data)
  }

  Submit()
  {
    this.getFormData()
    this.service.ShowAvailableRides.next('')
    console.log(this.service.Form1Data)
  }

}
