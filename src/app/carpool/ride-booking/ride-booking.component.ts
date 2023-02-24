import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { OfferedRides } from 'src/app/Models/DataModels/OfferedRides';
import { RideData } from 'src/app/Models/DataModels/RideData';
import { ScreenType } from 'src/app/Models/Enums/ScreenType';
import { MatchingRides } from 'src/app/Models/MatchingRide';
import { CarpoolDataServiceService } from 'src/app/Service/carpool-data-service.service';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';

@Component({
  selector: 'app-ride-booking',
  templateUrl: './ride-booking.component.html',
  styleUrls: ['./ride-booking.component.css'],
})
export class RideBookingComponent implements OnInit{
  MatchingRides!: MatchingRides[];
  OfferedRides!: OfferedRides[];
  MatchFound!:boolean

  constructor(
    private service: CarpoolServiceService,
    private dataService: CarpoolDataServiceService
  ) {

    this.MatchFound = true
    service.ShowAvailableRides.subscribe(() => {
      console.log("Getting Data")

      const  ride:RideData = new RideData
      ride.Date = service.Form1Data.Date
      ride.Time = service.Form1Data.Time
      ride.FromLocationId = service.Form1Data.FromLocationId
      ride.ToLocationId = service.Form1Data.ToLocationId

      console.log(ride)
      dataService.GetMatchingRides(ride).subscribe((data:any)=>
      {
        this.MatchingRides = data

       // this.loadAvailableRides();
       if(this.MatchingRides.length == 0)
       {
        this.MatchFound = false
       }
       else
       {
        this.MatchFound = true
       }
        console.log(data)
      })

    });
  }
  ngOnInit(): void {
    this.service.CurrentScreen = ScreenType.RideBooking
    console.log('In Ride Booking')
  }

  // loadAvailableRides() {
  //   this.MatchingRides = [];

  //   console.log(this.OfferedRides)

  //   this.OfferedRides.forEach((ride) => {
  //     const matchingRide = new MatchingRides();

  //     matchingRide.RideID = ride.OfferedRideId;
  //     matchingRide.Date = ride.Date;
  //     matchingRide.Time = ride.Time;
  //     matchingRide.From = this.getLocationName(this.service.Form1Data.FromLocationId);
  //     matchingRide.To = this.getLocationName(this.service.Form1Data.ToLocationId);
  //     matchingRide.Price = ride.TotalPrice;

  //     matchingRide.SeatAvailability = ride.SeatsProvided;
  //     this.dataService.GetUserName(ride.RideProviderId).subscribe((data: any) => {
  //       matchingRide.Name = data.toString();
  //       console.log('UserName : ', matchingRide.Name);
  //     });
  //     // matchingRide.Name = this.getUserName(ride.RideProviderId)

  //     this.MatchingRides.push(matchingRide);
  //   });
  // }

  // getLocationName(LocationId: number): any {
  //   const locationName = this.service.Locations.find(
  //     (location) => location.LocationId == LocationId
  //   )?.LocationName;

  //   if (locationName == 'undefined') return '';
  //   else return locationName?.toString();
  // }

}
