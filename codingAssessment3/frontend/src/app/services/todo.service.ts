import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todos } from '../todo.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos$ = new BehaviorSubject<Todos[]>([]);
  showAdd$ = new BehaviorSubject<boolean>(false);
  showUpdate$ = new BehaviorSubject<boolean>(false);
  todoId$ = new BehaviorSubject<string>('');

  private API_URL = 'http://localhost:8080/api/todos';
  constructor(private http: HttpClient) {
    this.getTodos().subscribe((data) => {
      this.todos$.next(data);
    });
  }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }
  deleteTodos(id: string): Observable<any> {
    return this.http.delete<any[]>(this.API_URL + '/' + id);
  }
  addTodos(todo: string): Observable<any> {
    return this.http.post<any[]>(this.API_URL, { todo: todo }, httpOptions);
  }
  fetchTodoById(id: string): Observable<any> {
    return this.http.get<any[]>(this.API_URL + '/' + id);
  }
  updateTodo(todo: string, id: string): Observable<any> {
    return this.http.patch<any[]>(this.API_URL + '/' + id, { todo: todo });
  }
}
