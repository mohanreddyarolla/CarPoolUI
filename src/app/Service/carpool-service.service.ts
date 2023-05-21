import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RideType } from '../Models/Enums/RideType';
import { ScreenType } from '../Models/Enums/ScreenType';
import { Form1 } from '../Models/Form1';
import { Form2 } from '../Models/Form2';
import { Locations } from '../Models/DataModels/Locations';
import { RideData } from '../Models/DataModels/RideData';
import { CarpoolDataServiceService } from './carpool-data-service.service';
import { OfferedRides } from '../Models/DataModels/OfferedRides';
import { User } from '../Models/User';
// enum RideType
// {
//   RideBooking,
//   RideOffering
// }

@Injectable({
  providedIn: 'root',
})
export class CarpoolServiceService {
  Message: string = 'Message';
  Locations:Locations[] = new Array<Locations>;
  RideData!: RideData;
  Form1Data!: Form1;
  Form2Data!: Form2;

  RideType = RideType.RideOffering;
  CurrentScreen = ScreenType.RideOffering;
  ScreenChanged = new Subject();
  OpenForm2 = new Subject();
  ShowAvailableRides = new Subject();

  // CurrentUser!:number
  SelectedRideIdToBook!: number;
  SelectedRideDetails!: OfferedRides;
  user!: User;

  constructor(private dataService: CarpoolDataServiceService) {
    this.GetAllAvailableLocations();
    this.RideData = new RideData();
    this.Form1Data = new Form1();
    this.Form2Data = new Form2();

    // this.getUsers().subscribe((data)=>
    // {
    //   console.log('Data: ',data)
    // })
  }

  changeScreen(ScreenType: ScreenType) {
    this.CurrentScreen = ScreenType;
    this.ScreenChanged.next('');
  }

  GetAllAvailableLocations() {


    for(var i=1;i<=10;i++)
    {
      let location = new Locations();
      location.LocationName = "A"+i.toString();
      this.Locations.push(location);
    }

  }

  getLocationName(LocationId: number): any {
    const locationName = this.Locations.find(
      (location) => location.LocationId == LocationId
    )?.LocationName;

    if (locationName == 'undefined') return '';
    else return locationName?.toString();
  }

  formatDate(day:number,month:number,year:any)
  {
    var d:string
    if(day < 10)
      d = '0'+day.toString()
    else
      d = day.toString()

    var m:string
    if(month < 10)
      m = '0'+month.toString()
    else
      m = month.toString()


    console.log(d+'/'+m+'/'+year)
    return d+'/'+m+'/'+year


  }
}
