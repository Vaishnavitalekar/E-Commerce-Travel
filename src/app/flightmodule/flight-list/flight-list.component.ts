import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookedflightsService } from 'src/app/service files/bookedflights.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {
 
  flightbookname:any;
  constructor(private fb:FormBuilder, private _BookedService:BookedflightsService , private _route: Router,public dialog:MatDialog ) { }
   
  bookform = this.fb.group({
    fname:['',Validators.required],
    lname:['',Validators.required],
    passenger:['',Validators.required],
    contact:['',Validators.required],
    email:['',Validators.required],
    name:[''],
    from:[''],
    to:[''],
    date:[''],
    time:[''],
    price:[''],
   
  })
  ngOnInit(): void {
    this._BookedService.sub.subscribe((obj:any)=>{
      this.flightbookname = obj
      console.log(obj)
    })
  }

  bookhere(){
    console.log(this.bookform)
    this.bookform.markAllAsTouched()
    if(this.bookform.valid){
      let finaldata = {
        status:'Active',
        userdetails: localStorage.getItem('userid'),
        from:this.flightbookname.from,
        to:this.flightbookname.to,
        date:this.flightbookname.date,
        time:this.flightbookname.time,
        price:this.flightbookname.price,

        fname:this.bookform.value.fname,
        lname:this.bookform.value.lname,
        passenger:this.bookform.value.passenger,
        contact:this.bookform.value.contact,
        email:this.bookform.value.email,
        name:this.flightbookname.name,
        
      }
    
      this._BookedService.addbooking(finaldata).subscribe(()=>{})
      alert('Booking Successfull')
      this.dialog.closeAll()
      this.bookform.reset()
      console.log(finaldata)
    }else{
      alert('enter required feilds')
    }

  }

}
