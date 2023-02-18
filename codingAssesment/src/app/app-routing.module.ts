import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieBookingComponent } from './components/add-movie-booking/add-movie-booking.component';
import { ListAllBookingsComponent } from './components/list-all-bookings/list-all-bookings.component';

const routes: Routes = [
  { path: 'addmoviebooking', component: AddMovieBookingComponent },
  { path: 'listmoviebooking', component: ListAllBookingsComponent },
  { path: '', component: ListAllBookingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
