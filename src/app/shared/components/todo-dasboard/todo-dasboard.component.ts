import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/modules/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-dasboard',
  templateUrl: './todo-dasboard.component.html',
  styleUrls: ['./todo-dasboard.component.scss']
})
export class TodoDasboardComponent implements OnInit {

  
  constructor( private _todoService : TodoService) { }

  ngOnInit(): void {
    this._todoService.fetchTodos()
      .subscribe(data => {
        this.todoArr =data 
      })
  }
 
  todoArr : Array<Itodo>=[]


  getNewTodo(todo : Itodo){
  this.todoArr.push(todo)

  }

}
