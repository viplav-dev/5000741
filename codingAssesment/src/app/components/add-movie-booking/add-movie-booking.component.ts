import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { MovieBookingsService } from 'src/app/movie-bookings.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-movie-booking',
  templateUrl: './add-movie-booking.component.html',
  styleUrls: ['./add-movie-booking.component.css'],
})
export class AddMovieBookingComponent implements OnInit {
  date: Date = new Date();

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this.service.getMovieBookingById(params['id']).subscribe((data) => {
          this.addMovieForm.patchValue(data);
        });
      }
    });
  }
  constructor(
    private service: MovieBookingsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  addMovieForm = new FormGroup({
    id: new FormControl(''),
    movieName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z]*$'),
    ]),
    movieBookingdate: new FormControl(''),
    noOfTickets: new FormControl('', [
      Validators.max(15),
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  addMovieBooking(data: any) {
    this.service.addMovieBooking(data);
    this.router.navigate(['listmoviebooking']);
  }
}
