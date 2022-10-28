import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookGuard } from '../Guard Files/book.guard';
import { Booking1Component } from './booking1/booking1.component';
import { FlightListComponent } from './flight-list/flight-list.component';

const routes: Routes = [{
  path:'',component:Booking1Component, 
  
  // children:[
  //   {
  //     path:'flightlist',component: FlightListComponent
  //   }
  // ]
},{
  path:'flightlist',component: FlightListComponent,canActivate:[BookGuard],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightmoduleRoutingModule { }
