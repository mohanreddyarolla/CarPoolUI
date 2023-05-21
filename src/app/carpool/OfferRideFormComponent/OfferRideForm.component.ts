import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';
import { ScreenType } from 'src/app/Models/Enums/ScreenType';
import { Locations } from 'src/app/Models/DataModels/Locations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RideOfferCardComponent } from '../ride-offering/ride-offer-card/ride-offer-card.component';

@Component({
  selector: 'app-OfferRideForm',
  templateUrl: './OfferRideForm.component.html',
  styleUrls: ['./OfferRideForm.component.css']
})
export class OfferRideFormComponent implements OnInit{

  @ViewChild('Form2') form2Ref!:ElementRef

  SelectionError!:boolean
  InvalidPrice!:boolean


  AddButtonsHiddenList=[false]
  NumberOfStops!:number
  LocationsList!:Locations[]

  form2!:FormGroup
  SelectedSeats = '1'
  Price = '0'


  formGroup!:FormGroup

  constructor(private service:CarpoolServiceService,private dialog:MatDialog){

  }

  isNumeric(value:any)
  {
    console.log(!new RegExp(/[^\d]/g).test(value.trim()))
    return !new RegExp(/[^\d]/g).test(value.trim());
  }

  ngOnInit(): void {
   this.NumberOfStops = 1
   this.LocationsList = this.service.Locations
   this.SelectionError = true
   this.InvalidPrice = true

   this.formGroup = new FormGroup({
    Location:new FormControl('',[Validators.required])
   })

  }

  AddStop(element:any)
  {
    console.log(element)
    console.log(element['Stop'+this.NumberOfStops],'Stop'+this.NumberOfStops)

    if(element['Stop'+this.NumberOfStops] != "")
    {
      this.AddButtonsHiddenList[this.NumberOfStops-1] = true
      this.AddButtonsHiddenList.push(false)
      this.NumberOfStops += 1
      this.SelectionError = true
    }
    else
    {
      this.SelectionError = false
      console.log("Please select location")
    }

  }

  OpenBookRide()
  {
    this.service.changeScreen(ScreenType.RideBooking)
    this.service.ScreenChanged.next('')
  }

  Submit(element:any)
  {
    if(this.isNumeric(element['Price']))
    {

      this.service.Form2Data.Price = element['Price']
      this.service.Form2Data.AvailabeSeats = element['AvailableSeats']

      let locations = ''
      for(let i=0;i<this.NumberOfStops;i++)
      {
        if(element['Stop'+(i+1)] != '')
          locations += element['Stop'+(i+1)]+','
      }

      this.service.Form2Data.StopList = locations
      console.log(this.service.Form2Data)
      this.InvalidPrice = true


      this.dialog.open(RideOfferCardComponent);
    }
    else
    {
      this.InvalidPrice = false
    }
  }

  optionSelected(indx:any)
  {
    if(indx == this.NumberOfStops)
      this.SelectionError = true;

  }


}
