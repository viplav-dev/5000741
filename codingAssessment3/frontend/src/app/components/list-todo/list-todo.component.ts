import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todos } from 'src/app/todo.model';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
})
export class ListTodoComponent {
  todos: Todos[] = [];

  constructor(private service: TodoService) {
    this.service.todos$.subscribe((data) => (this.todos = data));
  }

  ondeleteTodo(_id: string) {
    this.service.deleteTodos(_id).subscribe(() => {
      this.todos = this.todos.filter((item) => item._id !== _id);
      this.service.todos$.next(this.todos);
    });
  }
  showAddTodo() {
    this.service.showAdd$.next(true);
    this.service.showUpdate$.next(false);
  }
  onUpdateTodo(_id: string) {
    this.service.showAdd$.next(false);
    this.service.showUpdate$.next(true);
    this.service.todoId$.next(_id);
  }
}
