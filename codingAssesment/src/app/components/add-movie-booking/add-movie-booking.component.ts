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
    id: new FormControl('',[Validators.required, Validators.pattern('^[0-9]*$'),Validators.max(300)]),
    movieName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-z A-Z]*$'),
    ]),
    movieBookingdate: new FormControl(''),
    noOfTickets: new FormControl('', [
      Validators.max(15),
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  onAddMovieBooking(data: any) {
   if(this.addMovieForm.valid){
    this.service.addMovieBooking(data);
    this.router.navigate(['listmoviebooking']);
   }
   else{
      alert("Invalid Data");
   }
  }
}
