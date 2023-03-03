import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todos } from 'src/app/todo.model';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css'],
})
export class UpdateTodoComponent {
  singleTodo: Todos = {
    _id: '',
    todo: '',
    date: new Date(),
    __v: 0,
  };
  todos: Todos[] = [];
  constructor(private service: TodoService) {
    this.service.todos$.subscribe((data) => (this.todos = data));
    this.service.todoId$.subscribe((data) => {
      this.service.fetchTodoById(data).subscribe((data) => {
        this.singleTodo = data;
      });
    });
  }
  updateTodoItem(todo: string, id: string) {
    this.service.updateTodo(todo, id).subscribe((data) => {
      this.todos = this.todos.map((item) => {
        if (item._id === id) {
          item.todo = todo;
        }
        return item;
      });
      console.log(data);
      this.service.todos$.next(this.todos);
      this.service.showUpdate$.next(false);
    });
  }
}
