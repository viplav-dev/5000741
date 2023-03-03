import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todos } from 'src/app/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  todos: Todos[] = [];
  constructor(private service: TodoService) {
    this.service.todos$.subscribe((data) => (this.todos = data));
  }

  addTodoItem(todo: string) {
    this.service.addTodos(todo).subscribe((data) => {
      this.todos.push(data);
      this.service.todos$.next(this.todos);
    });
  }
 
}
