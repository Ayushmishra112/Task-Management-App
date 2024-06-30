import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTask, updateTask, deleteTask } from './actions/task.actions';
import { Task } from './models/task.model';
import { AppState } from './states/app.state';
import { selectAllTasks } from './reducers/task.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task-manager-app';
  tasks$: Observable<Task[]>;

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(selectAllTasks);
  }

  ngOnInit(): void {}

  onAddTask(task: Task) {
    this.store.dispatch(addTask({ task }));
  }

  onDeleteTask(task: Task) {
    this.store.dispatch(deleteTask({ id: task.id }));
  }

  onUpdateTask(task: Task) {
    this.store.dispatch(updateTask({ task }));
  }

  get tasks(): Task[] {
    let taskArray: Task[] = [];
    this.tasks$.subscribe(tasks => {
      taskArray = tasks || [];
    });
    return taskArray;
  }
}
