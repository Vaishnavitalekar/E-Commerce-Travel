import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
 {
  path:'flightbooking', loadChildren:()=> import('./flightmodule/flightmodule.module').then((ele)=>ele.FlightmoduleModule)
 },
 {
  path:'bookinghistory', loadChildren:()=> import('./bookinghistory/bookinghistory.module').then((ele)=>ele.BookinghistoryModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
