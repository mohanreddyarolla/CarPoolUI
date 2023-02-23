import { Component, OnInit } from '@angular/core';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';

@Component({
  selector: 'app-ride-offering',
  templateUrl: './ride-offering.component.html',
  styleUrls: ['./ride-offering.component.css']
})
export class RideOfferingComponent implements OnInit {

  NextFormOpen!:boolean;


  constructor(private service:CarpoolServiceService)
  {
    this.service.OpenForm2.subscribe(()=>
    {
      this.NextFormOpen = true
      console.log('next form')
    })
  }

  ngOnInit(): void {
    this.NextFormOpen=false;

    console.log('In Ride Offering')
  }



}
