import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookeddataComponent } from './bookeddata/bookeddata.component';

const routes: Routes = [
  {
    path:'', component:BookeddataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookinghistoryRoutingModule { }
