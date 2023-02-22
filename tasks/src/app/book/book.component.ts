import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books!: Book[];
  errorMessage:string="";
  constructor(private bookservice: BookService) {}
  ngOnInit(): void {
    this.getBooks();
  }
  observer = {
    next: (books: any[]) => (this.books = books),
    error:(err:Error)=>this.errorMessage=<any>err
  };
  getBooks() {
    this.bookservice.getBooks().subscribe(this.observer);
  }
}
