import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SignUpRequest } from '../Models/SignUpRequest';
import { Message } from '../Models/DataModels/Message';
import { LogInRequest } from '../Models/LogInRequest';
import { RideData } from '../Models/DataModels/RideData';
import { CarpoolServiceService } from './carpool-service.service';
import { RideBookingRequest } from '../Models/DataModels/RideBookingRequest';
import { OfferRideRequest } from '../Models/DataModels/OfferRideRequest';
import { UserData } from '../Models/DataModels/UserData';

@Injectable({
  providedIn: 'root'
})
export class CarpoolDataServiceService {

  readonly APIUrl = 'https://localhost:7297/api/CarPool'

  constructor(private http:HttpClient) { }

  getUsers():Observable<any>
  {
    return this.http.get('https://localhost:7297/api/CarPool/SignUp')
  }

  SignUpUser(signUpRequest:SignUpRequest)
  {
    return this.http.post(this.APIUrl+'/SignUp',signUpRequest)
  }

  LogInUser(loginRequest:LogInRequest)
  {
    return this.http.post(this.APIUrl+'/LogIn',loginRequest)
  }

  GetLocations()
  {
    return this.http.get(this.APIUrl+'/Home/GetAllLocations')
  }

  GetMyRides(UserId:any)
  {
    return this.http.get(this.APIUrl+'/MyRides/'+UserId)
  }

  GetMatchingRides(ridedata:RideData)
  {
    return this.http.post(this.APIUrl+'/BookARide/GetAvailableRides',ridedata)
  }

  GetUserName(userId:number)
  {
    return this.http.get(this.APIUrl+'/Home/GetUserName/'+userId)
  }

  GetOfferedRidesById(RideId:number)
  {
    return this.http.get(this.APIUrl+"/Home/GetOfferedRidesById/"+RideId)
  }

  GetAvailableSeats(AvailableRideId:number, LocationId:number)
  {
    return this.http.get(this.APIUrl+"/Home/GetAvailableSeats/"+AvailableRideId+'/'+LocationId)
  }

  GetBookingCard(AvailableRideId:number ,FromLocationId:number, ToLocationId:number)
  {
    return this.http.get(this.APIUrl+"/BookARide/GetBookingCard/"+AvailableRideId+'/'+FromLocationId+'/'+ToLocationId);
  }

  BookARide(rideRequest:RideBookingRequest)
  {
    return this.http.post(this.APIUrl+'/BookARide/Book',rideRequest);
  }

  OfferARide(rideRequest:OfferRideRequest)
  {
    return this.http.post(this.APIUrl+'/OfferRide',rideRequest)
  }

  GetUserData(userId:number)
  {
    return this.http.get(this.APIUrl+'/Home/GetUserData/'+userId)
  }

  UpdateUserData(userData:UserData)
  {
    return this.http.post(this.APIUrl+'/Home/UpdateUserData/',userData)
  }

}
