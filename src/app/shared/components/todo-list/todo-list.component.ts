import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { TodoService } from '../service/todo.service';
import { Itodo } from 'src/app/modules/todo';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todoArr!: Array<Itodo>;
  @Output() removeTodo = new EventEmitter<string>();

  constructor(
    private _todoService: TodoService,
    private _matDialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onTodoEdit(todo: Itodo) {
    this._todoService.setEditTodo(todo);
  }

  onTodoRemove(id: string) {
    const matConfig = new MatDialogConfig();
    matConfig.data = 'Are you Sure Want to Remove ?';
    matConfig.width = '300px';

    const dialogRef = this._matDialog.open(GetConfirmComponent, matConfig);

    dialogRef.afterClosed().subscribe(flag => {
      if (flag) {
        this._todoService.removeTodo(id).subscribe({
          next: () => this.removeTodo.emit(id),
          error: err => console.log(err)
        });
      }
    });
  }
}
