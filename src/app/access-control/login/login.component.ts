import { Component, EventEmitter, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public showPassword: boolean = false;

  @Output() goToSignUpPage = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  ChangePage()
  {
    this.goToSignUpPage.next('')
  }
}
