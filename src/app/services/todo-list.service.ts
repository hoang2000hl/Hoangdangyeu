import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';
const defaultTodoList: TodoItem[] = [
  { title: 'install NodeJS', completed: false },
  { title: 'install Angular CLI', completed: false },
  { title: 'create new app', completed: false },
  { title: 'serve app', completed: false },
  { title: 'develop app', completed: false },
  { title: 'deploy app', completed: false },
];
@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: TodoItem[];
  constructor(private storageService: StorageService) { 
    this.todoList = storageService.getData(todoListStorageKey) || 
    defaultTodoList;
  }
  
  saveList(): void {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
   }
   addItem(item: TodoItem): void {
    this.todoList.push(item);
    this.saveList()
   } 
   updateItem(item: TodoItem, changes): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = {...item, ...changes};
    this.saveList();
   }

   deleteItem(item: TodoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1)
    this.saveList();
   }
// }
