import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http:HttpClient) { }

  getbookinghistory(){
    return this.http.get('http://localhost:3000/FlightBookingDetails')
  }

  updatecancel(id:any , obj :any){
    return this.http.put('http://localhost:3000/FlightBookingDetails/'+id , obj)
  }
}
