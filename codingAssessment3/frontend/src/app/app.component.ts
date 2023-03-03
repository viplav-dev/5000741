import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todos } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'codingAssessment3';
  showAdd: boolean = false;
  showUpdate: boolean = false;
  constructor(private service: TodoService) {
    this.service.showAdd$.subscribe((data) => (this.showAdd = data));
    this.service.showUpdate$.subscribe((data) => (this.showUpdate = data));
  }
}
