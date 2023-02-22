import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  booksUrl = './assets/books.json';
  constructor(private http: HttpClient) {}
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }
}
