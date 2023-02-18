export class movie {
  id: number;
  movieName: string;
  movieBookingdate: Date;
  noOfTickets: number;
  totalAmount: number;
  constructor(
    id: number,
    movieName: string,
    movieBookingdate: Date,
    noOfTickets: number
  ) {
    this.id = id;
    this.movieName = movieName;
    this.movieBookingdate = movieBookingdate;
    this.noOfTickets = noOfTickets;
    this.totalAmount = this.noOfTickets * 150;
  }
}
