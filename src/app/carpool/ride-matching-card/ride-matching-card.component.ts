import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScreenType } from 'src/app/Models/Enums/ScreenType';
import { MatchingRides } from 'src/app/Models/MatchingRide';
import { CarpoolDataServiceService } from 'src/app/Service/carpool-data-service.service';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';
import { BookingCardComponent } from './booking-card/booking-card.component';

@Component({
  selector: 'app-ride-matching-card',
  templateUrl: './ride-matching-card.component.html',
  styleUrls: ['./ride-matching-card.component.css'],
})
export class RideMatchingCardComponent implements OnInit {
  @Input() Rides!: MatchingRides[];
  allMatchingRides!: MatchingRides[];
  name:string = 'john'

  constructor(
    public dialog: MatDialog,
    private service: CarpoolServiceService,
    private dataService: CarpoolDataServiceService
  ) {}
ngAfterViewInit(){

}

  ngOnInit(): void {
    this.allMatchingRides = this.Rides;
    // console.log('MatchingRides : ',this.Rides)
    // this.name=this.Rides[0].Name;
  }

  OpenDetails(availableRideID: any) {
    // if (this.service.CurrentScreen == ScreenType.RideBooking) {
    //   this.service.SelectedRideIdToBook = availableRideID;
    //   this.dataService
    //     .GetOfferedRidesById(availableRideID)
    //     .subscribe((data: any) => {
    //       this.service.SelectedRideDetails = data;

    //       this.dialog.open(BookingCardComponent);
    //       console.log(availableRideID);
    //     });
    // }
  }
}
