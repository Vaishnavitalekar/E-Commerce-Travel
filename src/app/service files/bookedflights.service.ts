import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class BookedflightsService {
   
  sub = new BehaviorSubject<any>('')
  constructor(private http:HttpClient) {
  
   }

  addbooking(obj:any){
    return  this.http.post('http://localhost:3000/FlightBookingDetails', obj)
  }

  getdata(obj:any){
    return  this.sub.next(obj)
  }
}
