import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookinghistoryRoutingModule } from './bookinghistory-routing.module';
import { BookeddataComponent } from './bookeddata/bookeddata.component';


@NgModule({
  declarations: [
    BookeddataComponent
  ],
  imports: [
    CommonModule,
    BookinghistoryRoutingModule
  ]
})
export class BookinghistoryModule { }
