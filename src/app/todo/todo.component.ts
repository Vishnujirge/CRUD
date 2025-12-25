import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../modules/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})


export class TodoComponent implements OnInit {

  todoArr: Array<Itodo> = [

    {
      todoItem:'JS',
      todoId:"123"
    }
  ];

  @ViewChild('todoItem') todoItem ! :ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdd(){
    //get todo obj

    let todoObj : Itodo ={
      todoItem:this.todoItem.nativeElement.value,
      todoId : Date.now().toString()
    }

    this.todoItem.nativeElement.value =''
    console.log(todoObj)

    //push

      this.todoArr.push(todoObj)

    //create new li




  }

  trackById(index :number,todo:Itodo){
    return todo.todoId
  }



  removeTodo(id:string){
      console.log(id);
      let getIndex = this.todoArr.findIndex(t =>  t.todoId === id)
      this.todoArr.splice(getIndex,1)
  }



}


// Zone.js >> ChangeDetection.default
// Zone.js >> ChangeDetection.onPush