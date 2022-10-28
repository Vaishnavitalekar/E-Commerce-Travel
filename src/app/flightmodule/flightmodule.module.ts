import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightmoduleRoutingModule } from './flightmodule-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Booking1Component } from './booking1/booking1.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import{ MatDialogModule} from '@angular/material/dialog'

@NgModule({
  declarations: [
   
    Booking1Component,
    FlightListComponent
  ],
  imports: [
    CommonModule,
    FlightmoduleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],

// exports:[FlightListComponent]
})
export class FlightmoduleModule { }
