import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { CarpoolServiceService } from 'src/app/Service/carpool-service.service';
import { ScreenType } from 'src/app/Models/Enums/ScreenType';
import { SignUpRequest } from 'src/app/Models/SignUpRequest';
import { CarpoolDataServiceService } from 'src/app/Service/carpool-data-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageComponent } from 'src/app/carpool/message/message.component';
import { User } from 'src/app/Models/User';
import { Router } from '@angular/router';

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
  Status!: string;

  @Output() goToLogInPage = new EventEmitter();

  constructor(
    private snakBar: MatSnackBar,
    private service: CarpoolServiceService,
    private DataService: CarpoolDataServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.signUpRequest = new SignUpRequest();
    this.PasswordMatched = true;

    this.SignUpForm = new FormGroup({
      NameFormControl: new FormControl('', [Validators.required]),

      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),

      passwordFormControl: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
        Validators.minLength(8),
      ]),

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
    console.log(this.signUpRequest);
    console.log(this.SignUpForm);

    // this.DataService.getUsers().subscribe((data)=>
    // {
    //   console.log(data)
    // });

    this.DataService.SignUpUser(this.signUpRequest).subscribe((data: any) => {
      if (data.Status) {
        this.service.user = new User();
        this.service.user.UserId = data.UserId;

        this.DataService.GetUserName(data.UserId).subscribe((data: any) => {
          this.service.user.UserName = data;
          this.service.changeScreen(ScreenType.Home);
          this.service.ScreenChanged.next('');
          this.route.navigate(['/LogIn']);
          // this.service.CurrentUser = data.UserId
        });
      } else {
        this.Status = data.StatusMessage;
      }
      this.service.Message = data.StatusMessage;
      this.snakBar.openFromComponent(MessageComponent, {
        duration: 1000,
      });
    });
  }
}
