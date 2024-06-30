import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllTasks } from '../../reducers/task.reducer';
import { AppState } from '../../states/app.state';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;
  @Input() tasks: Task[] = [];
  @Output() updateTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<Task>();

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(selectAllTasks);
  }


  ngOnInit(): void {}

  onUpdate(task: Task) {
    this.updateTask.emit(task);
  }

  onDelete(task: Task) {
    this.deleteTask.emit(task);
  }
}
