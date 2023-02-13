import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public showPassword: boolean = false;

  @Output() goToLogInPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  ChangePage()
  {
    this.goToLogInPage.next('')
  }

}
