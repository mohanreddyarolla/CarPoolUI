import { Component } from '@angular/core';


@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.css']
})
export class AccessControlComponent {

  inSignUp:boolean = true;
  inLogIn:boolean = false;

  changePage()
  {
    this.inSignUp = !this.inSignUp;
    this.inLogIn = !this.inLogIn;
  }

}
