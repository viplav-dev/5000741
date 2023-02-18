import { Injectable } from '@angular/core';
import { movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieBookingsService {
  http: HttpClient;
  bookedMovies: movie[] = [];
  fetched: boolean = false;
  host: string = 'http://' + window.location.hostname + ':3000';
  constructor(http: HttpClient) {
    this.http = http;
  }

  fetchMovieBooking() {
    this.http.get(this.host + '/movies').subscribe((data) => {
      if (!this.fetched) {
        this.convert(data); // send json to convert function
        this.fetched = true;
      }
    });
  }
  convert(data: any) {
    for (let o of data) {
      let e = new movie(o.id, o.movieName, o.movieBookingdate, o.noOfTickets);
      this.bookedMovies.push(e); // store in employees array
    }
  }
  addMovieBooking(data: movie) {
    let currentBooking: movie = new movie(
      data['id'],
      data['movieName'],
      data['movieBookingdate'],
      data['noOfTickets']
    );
    let found: boolean = false;
    for (let i = 0; i < this.bookedMovies.length; i++) {
      let b = this.bookedMovies[i];
      if (b.id === currentBooking.id) {
        this.bookedMovies.splice(i, 1);
        this.bookedMovies.push(currentBooking);
        found = true;
        this.http
          .put(this.host + '/movies/' + currentBooking.id, currentBooking, {
            headers: { 'content-type': 'application/json' },
          })
          .subscribe({
            complete: () => {
              alert('Movie Booking Updated');
            },
          });
      }
    }
    if (found === false) {
      this.bookedMovies.push(currentBooking);
      this.http
        .post(this.host + '/movies', currentBooking, {
          headers: { 'content-type': 'application/json' },
        })
        .subscribe({
          complete: () => {
            alert('Movie Booking Added');
          },
        });
    }
  }

  listMovieBooking(): movie[] {
    return this.bookedMovies;
  }
  deleteMovieBooking(id: number): void {
    this.http.delete(this.host + '/movies/' + id).subscribe({
      complete: () => {
        alert('Movie Booking Deleted');
      },
    });
    for (let i = 0; i < this.bookedMovies.length; i++) {
      let b = this.bookedMovies[i];
      if (b.id === id) {
        this.bookedMovies.splice(i, 1);
      }
    }
  }

  getMovieBookingById(id: number): Observable<any> {
    return this.http.get<any[]>(this.host + '/movies/' + id);
   
  }
}
