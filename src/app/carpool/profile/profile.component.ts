import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserData } from 'src/app/Models/DataModels/UserData';
import { InputFields } from 'src/app/Models/Enums/InputFields';
import { InputFieldDisable } from 'src/app/Models/InputFieldDisable';
import { User } from 'src/app/Models/User';
import { CarpoolDataServiceService } from 'src/app/Service/carpool-data-service.service';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  inputFields = InputFields;
  inputFieldsDisable!: InputFieldDisable;
  InputEdited!: boolean;

  userData!:UserData
  constructor(private snakBar:MatSnackBar, private renderer: Renderer2,private dialog:MatDialog,private service:CarpoolServiceService, private dataService:CarpoolDataServiceService) {}

  ngOnInit(): void {
    this.userData = new UserData()
    this.loadUserData()

    this.inputFieldsDisable = new InputFieldDisable();
    this.inputFieldsDisable.Address = true;
    this.inputFieldsDisable.Age = true;
    this.inputFieldsDisable.FullName = true;
    this.inputFieldsDisable.Email = true;

    this.InputEdited = false;


  }

  loadUserData()
  {
    this.dataService.GetUserData(this.service.user.UserId).subscribe((data:any)=>
    {
      console.log('User Data : ',data)
      // this.userData.Name = data.Name
      // this.userData.UserId = data.UserId
      // this.userData.Address = data.Address
      // this.userData.Age = data.Age
      // this.userData.EmailId = data.EmailId
      // this.userData.Password = data.Password

      this.userData = data

      console.log(this.userData)
    })
  }

  EnableEdit(event: any, inputType: InputFields) {
    this.InputEdited = true;
    this.renderer.addClass(event.target, 'EditIcon');

    switch (inputType) {
      case InputFields.Email:
        this.inputFieldsDisable.Email = false;
        break;

      case InputFields.FullName:
        this.inputFieldsDisable.FullName = false;
        break;

      case InputFields.Address:
        this.inputFieldsDisable.Address = false;
        break;

      case InputFields.Age:
        this.inputFieldsDisable.Age = false;
        break;
    }
  }

  close() {
    this.dialog.closeAll()
  }

  SaveChanges()
  {
    this.dataService.UpdateUserData(this.userData).subscribe((data:any)=>
    {
      console.log(data)
      this.service.Message = data
      this.snakBar.openFromComponent(MessageComponent, {
        duration: 1000,
      });
    })
  }
}
