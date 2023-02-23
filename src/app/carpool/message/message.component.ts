import { Component, OnInit } from '@angular/core';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message!:string

  constructor(private service:CarpoolServiceService){}

  ngOnInit(): void {
    this.message = this.service.Message
  }


}
