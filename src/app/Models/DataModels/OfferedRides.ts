import { Timestamp } from "rxjs"

export class OfferedRides
{
    OfferedRideId!:number
    TotalPrice!:number
    Time!:string
    Date!:string
    StopList!:string
    RideProviderId!:number
    CurrentState!:string
    SeatsProvided!:number
}
