import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookingCard } from 'src/app/Models/BookingCard';
import { RideBookingRequest } from 'src/app/Models/DataModels/RideBookingRequest';
import { Form1 } from 'src/app/Models/Form1';
import { CarpoolDataServiceService } from 'src/app/Service/carpool-data-service.service';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';
import { MessageComponent } from '../../message/message.component';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css'],
})
export class BookingCardComponent implements OnInit {
  @ViewChild('RequiredSeats') RequiredSeats!: ElementRef;
  CardData!: BookingCard;
  constructor(
    private snakBar: MatSnackBar,
    private service: CarpoolServiceService,
    private dataService: CarpoolDataServiceService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.CardData = new BookingCard();

    // this.dataService
    //   .GetBookingCard(
    //     this.service.SelectedRideDetails.OfferedRideId,
    //     this.service.Form1Data.FromLocationId,
    //     this.service.Form1Data.ToLocationId
    //   )
    //   .subscribe((data: any) => {
    //     console.log('Boking Card: ', data);
    //     this.CardData = data;
    //   });
    // this.CardData.From = this.service.getLocationName( this.service.Form1Data.FromLocationId)
    // this.CardData.To = this.service.getLocationName(this.service.Form1Data.ToLocationId)
    // this.CardData.Date = this.service.SelectedRideDetails.Date
    // this.CardData.Time = this.service.SelectedRideDetails.Time
    // this.CardData.AvailableSeats = this.service.SelectedRideDetails.SeatsProvided
  }

  BookARide() {
    this.service.Message = "Booking conformed";
      this.dialog.closeAll();
      this.snakBar.openFromComponent(MessageComponent, { duration: 1000 });
    var rideBookingRequest = new RideBookingRequest();


  }
}
