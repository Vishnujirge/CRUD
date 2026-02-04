import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDasboardComponent } from './shared/components/todo-dasboard/todo-dasboard.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDasboardComponent,
    TodoListComponent,
    TodoFormComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
