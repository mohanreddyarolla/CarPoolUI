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

    this.DataService.GetMyRides(this.service.user.UserId).subscribe((data: any) => {
      console.log(data);
      this.myRides = data;
      this.LoadBookedRides();
      this.LoadOfferedRides();
      // this.OfferedRides = this.myRides.OfferedRides
      // this.BookedRides = this.myRides.BookedRides
      console.log(this.BookedRides);
      console.log(this.OfferedRides);
    });
  }

  LoadOfferedRides() {
    this.OfferedRides = [];
    this.myRides.OfferedRides.forEach((ride) => {
      const matchingRide = new MatchingRides();
      const stoplist = this.ParseStopList(ride.StopList);

      matchingRide.RideID = ride.OfferedRideId;
      matchingRide.Date = ride.Date;
      matchingRide.Time = ride.Time;
      matchingRide.From = this.getLocationName(stoplist[0]);
      matchingRide.To = this.getLocationName(stoplist[stoplist.length - 1]);
      matchingRide.Price = ride.TotalPrice;
      matchingRide.SeatAvailability = ride.SeatsProvided;
      this.DataService.GetUserName(ride.RideProviderId).subscribe((data: any) => {
        matchingRide.Name = data.toString();
        console.log('UserName : ', matchingRide.Name);
      });
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

  LoadBookedRides() {
    this.BookedRides = [];

    this.myRides.BookedRides.forEach((ride) => {
      const matchingRide = new MatchingRides();

      matchingRide.RideID = ride.BookedRideId;
      matchingRide.Date = ride.Date;
      matchingRide.Time = ride.Time;
      matchingRide.From = this.getLocationName(ride.StartPointId);
      matchingRide.To = this.getLocationName(ride.StopPointId);
      matchingRide.Price = ride.Price;
      matchingRide.SeatAvailability = ride.ReservedSeats;

      this.DataService.GetUserName(ride.RideProviderId).subscribe((data: any) => {
        matchingRide.Name = data.toString();
        console.log('UserName : ', matchingRide.Name);
      });

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
