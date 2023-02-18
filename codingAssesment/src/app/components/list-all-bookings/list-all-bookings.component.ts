import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movie } from 'src/app/movie';
import { MovieBookingsService } from 'src/app/movie-bookings.service';

@Component({
  selector: 'app-list-all-bookings',
  templateUrl: './list-all-bookings.component.html',
  styleUrls: ['./list-all-bookings.component.css'],
})
export class ListAllBookingsComponent implements OnInit {
  constructor(private service: MovieBookingsService, private router: Router) {}
  ngOnInit(): void {
    this.service.fetchMovieBooking();
  }
  bookedMovies: any[] = this.service.listMovieBooking();

  deleteBooking(id: number) {
    this.service.deleteMovieBooking(id);
  }
  updateBooking(id: number): void {
    this.router.navigate(['addmoviebooking'], { queryParams: { id: id } });
  }
}
