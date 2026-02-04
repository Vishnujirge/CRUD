import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDasboardComponent } from './todo-dasboard.component';

describe('TodoDasboardComponent', () => {
  let component: TodoDasboardComponent;
  let fixture: ComponentFixture<TodoDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDasboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
