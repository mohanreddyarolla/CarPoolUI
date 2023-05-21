import { Component, OnInit } from '@angular/core';
import { OfferCardData } from 'src/app/Models/OfferCardData';
import { OfferRideRequest } from 'src/app/Models/DataModels/OfferRideRequest';
import { CarpoolDataServiceService } from 'src/app/Service/carpool-data-service.service';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageComponent } from '../../message/message.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ride-offer-card',
  templateUrl: './ride-offer-card.component.html',
  styleUrls: ['./ride-offer-card.component.css'],
})
export class RideOfferCardComponent implements OnInit {
  CardData!: OfferCardData;

  constructor(
    private service: CarpoolServiceService,
    private dataService: CarpoolDataServiceService,
    private snakBar: MatSnackBar,
    private dialog:MatDialog
  ) {}

  ngOnInit(): void {
    this.CardData = new OfferCardData();

    var AllStops =
      this.service.Form1Data.FromLocationId +
      ',' +
      this.service.Form2Data.StopList +
      this.service.Form1Data.ToLocationId;
    var AllStopsNames = this.ParseStopList(AllStops);
    this.CardData.StopsList = [];
    AllStopsNames.forEach((value) => {
      this.CardData.StopsList.push(this.getLocationName(value));
    });

    this.CardData.Date = this.service.Form1Data.Date;
    this.CardData.Time = this.service.Form1Data.Time;
    this.CardData.SeatsProvided = this.service.Form2Data.AvailabeSeats;
    this.CardData.Price = this.service.Form2Data.Price;

    console.log(this.CardData);
  }

  OfferARide() {

    this.service.Message = "Ride offered Successfull";
    this.snakBar.openFromComponent(MessageComponent, { duration: 1000 });
    this.dialog.closeAll()
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
