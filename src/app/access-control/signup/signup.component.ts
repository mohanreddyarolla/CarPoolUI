import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  Validators,
  ReactiveFormsModule,
  PatternValidator,
  FormGroup,
} from '@angular/forms';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';
import { ScreenType } from 'src/app/Models/Enums/ScreenType';
import { SignUpRequest } from 'src/app/Models/SignUpRequest';
import { CarpoolDataServiceService } from 'src/app/Service/carpool-data-service.service';
import { Message } from 'src/app/Models/DataModels/Message';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageComponent } from 'src/app/carpool/message/message.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpRequest!: SignUpRequest;
  conformPassword!: string;
  PasswordMatched!: boolean;
  SignUpForm!: FormGroup;

  public showPassword: boolean = false;
  Status!:string

  @Output() goToLogInPage = new EventEmitter();

  constructor(private snakBar:MatSnackBar, private service: CarpoolServiceService,private DataService:CarpoolDataServiceService) {}

  ngOnInit(): void {
    this.signUpRequest = new SignUpRequest();
    this.PasswordMatched = true;

    this.SignUpForm = new FormGroup({

      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),

      passwordFormControl: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
        Validators.minLength(8)]),

      conformPasswordFormControl: new FormControl('', [Validators.required]),
    });
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  ChangePage() {
    this.goToLogInPage.next('');
  }

  Submit() {
    console.log(this.signUpRequest)
    console.log(this.SignUpForm)

    // this.DataService.getUsers().subscribe((data)=>
    // {
    //   console.log(data)
    // });

    this.DataService.SignUpUser(this.signUpRequest).subscribe((data:any)=>
    {

      if(data.Status)
      {
        this.service.changeScreen(ScreenType.Home);
        this.service.CurrentUser = data.UserId
      }
      else
      {
        this.Status = data.StatusMessage

      }
      this.service.Message = data.StatusMessage
      this.snakBar.openFromComponent(MessageComponent,{
        duration:800
      })

    });


  }

  MathcPassword() {
    console.log(
      this.signUpRequest.Password,
      this.conformPassword,
      this.signUpRequest.Password == this.conformPassword
    );
    if (this.signUpRequest.Password == this.conformPassword) {
      this.PasswordMatched = true;
    } else {
      this.PasswordMatched = false;
    }
  }
}
