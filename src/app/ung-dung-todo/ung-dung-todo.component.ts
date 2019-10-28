import {Component, OnInit} from '@angular/core';
import {Itodo} from '../class/itodo';

@Component({
  selector: 'app-ung-dung-todo',
  templateUrl: './ung-dung-todo.component.html',
  styleUrls: ['./ung-dung-todo.component.css']
})

export class UngDungTodoComponent implements OnInit {
  todos: Array<Itodo> = [];
  count = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onChange(value) {
    if (value) {
      const todo: Itodo = new Itodo(this.count++, value, false);
      this.todos.push(todo);
    }
  }

  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
