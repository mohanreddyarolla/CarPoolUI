import { Component, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';
import { ScreenType } from 'src/app/Models/Enums/ScreenType';
import { LogInRequest } from 'src/app/Models/LogInRequest';
import { CarpoolDataServiceService } from 'src/app/Service/carpool-data-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageComponent } from 'src/app/carpool/message/message.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public showPassword: boolean = false;
  InvalidCredentials!:boolean
  logInRequest!:LogInRequest
  Status!:string

  LoginForm!: FormGroup;

  @Output() goToSignUpPage = new EventEmitter();
  constructor(private snakBar:MatSnackBar, private service:CarpoolServiceService,private DataService:CarpoolDataServiceService) {
    this.logInRequest = new LogInRequest()
   }

  ngOnInit(): void {

    this.InvalidCredentials = false;

    this.LoginForm = new FormGroup({

      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),

      passwordFormControl: new FormControl('', [
        Validators.required,
        ]),

    });
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  ChangePage()
  {
    this.goToSignUpPage.next('')
  }

  Submit()
  {

    this.DataService.LogInUser(this.logInRequest).subscribe((data:any)=>
    {
      console.log(data)
      if(data.Status)
      {
        this.service.Message = data.StatusMessage
        this.snakBar.openFromComponent(MessageComponent,{
          duration:800
        })
        this.service.CurrentUser = data.UserId;
        this.service.changeScreen(ScreenType.Home);
        console.log(this.service.CurrentUser)
      }
      else
      {
        this.Status = data.StatusMessage
      }

    });

  }

  authenticateUser(logInRequest:LogInRequest)
  {
    console.log(logInRequest)
    return true
  }
}
