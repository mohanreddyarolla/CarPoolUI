import { Component, OnInit } from '@angular/core';
import { BookedRides } from 'src/app/Models/DataModels/BookedRides';
import { MyRides } from 'src/app/Models/DataModels/MyRides';
import { OfferedRides } from 'src/app/Models/DataModels/OfferedRides';
import { ScreenType } from 'src/app/Models/Enums/ScreenType';
import { MatchingRides } from 'src/app/Models/MatchingRide';
import { CarpoolDataServiceService } from 'src/app/Service/carpool-data-service.service';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';

@Component({
  selector: 'app-my-rides',
  templateUrl: './my-rides.component.html',
  styleUrls: ['./my-rides.component.css'],
})
export class MyRidesComponent implements OnInit {
  OfferedRides!: MatchingRides[];
  BookedRides!: MatchingRides[];
  myRides!: MyRides;

  constructor(
    private service: CarpoolServiceService,
    private DataService: CarpoolDataServiceService
  ) {}

  ngOnInit(): void {

    this.service.CurrentScreen = ScreenType.MyRides
  }

  async LoadOfferedRides() {
    this.OfferedRides = [];
    await this.myRides.OfferedRides.forEach((ride) => {
      const matchingRide = new MatchingRides();
      const stoplist = this.ParseStopList(ride.StopList);

      matchingRide.rideID = ride.OfferedRideId;
      matchingRide.date = ride.Date;
      matchingRide.time = ride.Time;
      matchingRide.from = this.getLocationName(stoplist[0]);
      matchingRide.to = this.getLocationName(stoplist[stoplist.length - 1]);
      matchingRide.price = ride.TotalPrice;
      matchingRide.seatAvailability = ride.SeatsProvided;

      // matchingRide.Name = this.getUserName(ride.RideProviderId)

      this.OfferedRides.push(matchingRide);
    });
  }

  // getUserName(userId:number )
  // {
  //   var username='-----'
  //    this.DataService.GetUserName(userId).subscribe((data:any)=>
  //   {
  //     username = data.toString();
  //     console.log("UserName : ",username)
  //   });

  //   return username

  // }

  async LoadBookedRides() {
    this.BookedRides = [];

    await this.myRides.BookedRides.forEach((ride) => {
      const matchingRide = new MatchingRides();

      matchingRide.rideID = ride.BookedRideId;
      matchingRide.date = ride.Date;
      matchingRide.time = ride.Time;
      matchingRide.from = this.getLocationName(ride.StartPointId);
      matchingRide.to = this.getLocationName(ride.StopPointId);
      matchingRide.price = ride.Price;
      matchingRide.seatAvailability = ride.ReservedSeats;



      // matchingRide.Name = this.getUserName(ride.RideProviderId)

      this.BookedRides.push(matchingRide);
    });
  }

  getLocationName(LocationId: number): any {
    const locationName = this.service.Locations.find(
      (location) => location.LocationId == LocationId
    )?.LocationName;

    if (locationName == 'undefined') return '';
    else return locationName?.toString();
  }

  ParseStopList(stopList: string) {
    const newStopList = stopList.split(',').map((i) => Number(i));

    return newStopList;
  }
}
