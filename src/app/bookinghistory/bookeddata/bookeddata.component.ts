import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/service files/history.service';

@Component({
  selector: 'app-bookeddata',
  templateUrl: './bookeddata.component.html',
  styleUrls: ['./bookeddata.component.scss']
})
export class BookeddataComponent implements OnInit {
  booked:any;
  constructor(private _HistoryService:HistoryService) { }

  ngOnInit(): void {
    this._HistoryService.getbookinghistory().subscribe((arr)=>{
      this.booked = arr
    })
  }

  cancelbooking(user:any){
    user.status = 'Canceled'
    this._HistoryService.updatecancel(user.id,user).subscribe(()=>{})
    
    console.log(user)
  }


}
