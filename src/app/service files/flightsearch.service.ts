import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsearchService {

  constructor(private http:HttpClient) { }
 getflightdetails(){
  return this.http.get('http://localhost:3000/flightlist')
 }

}
