import { Component, OnInit } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';
import { TodoListService } from './services/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  titleApp: String = "Hello";
  title: any;
  todoList: TodoItem[];
  item: TodoItem;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
    console.log(this.todoList);
    
  }
  completeItem(): void {
  }
  addItem(title: string): void {
    this.todoListService.addItem({ title, completed: false });
    console.log("addItem",this.todoList);
  }
  removeItem(item): void {
    this.todoListService.deleteItem(item);
  }


}
