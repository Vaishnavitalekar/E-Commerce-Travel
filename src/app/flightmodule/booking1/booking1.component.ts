import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookedflightsService } from 'src/app/service files/bookedflights.service';
import { FlightsearchService } from 'src/app/service files/flightsearch.service';
import { FlightListComponent } from '../flight-list/flight-list.component';

@Component({
  selector: 'app-booking1',
  templateUrl: './booking1.component.html',
  styleUrls: ['./booking1.component.scss']
})
export class Booking1Component implements OnInit {
  
  constructor(private fb:FormBuilder, private _service:FlightsearchService,private _route:Router, public dialog:MatDialog , private _BookedService:BookedflightsService) { }
  flightlist:any=[]
  ngOnInit(): void {
    this._service.getflightdetails().subscribe((list)=>{
      this.flightlist = list
     
    })
  }
 

  searchform = this.fb.group({
    from:['',Validators.required],
    to:['',Validators.required],
    date:['',Validators.required],
  })
  result:any;
  search() {
    this.searchform.markAllAsTouched()

    if (this.searchform.valid) {
      this.result = this.flightlist.filter((obj: any) => {
        return (this.searchform.value.from === obj.from && this.searchform.value.to === obj.to && this.searchform.value.date == obj.date)

      })

      if (this.result.length > 0) {
        
      } else {
        alert('No Such Flights present ')
      }

    } else {
      alert('please select required field')
    }
  } 
   
  book(obj1:any){
    this._BookedService.getdata(obj1)
     this.dialog.open( FlightListComponent,{
      width:'700px',
      height:'500px',
     

      
     })
  }
  }



