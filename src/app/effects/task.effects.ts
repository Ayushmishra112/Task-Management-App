import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs/operators';
import { addTask, updateTask, deleteTask } from '../actions/task.actions';
import { AppState } from '../states/app.state';
import { selectAllTasks } from '../reducers/task.reducer';
@Injectable()
export class TaskEffects {

  saveTasks$ = createEffect(() => this.actions$.pipe(
    ofType(addTask, updateTask, deleteTask),
    withLatestFrom(this.store.pipe(select(selectAllTasks))), // Select the tasks from the store
    tap(([action, tasks]) => {
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to local storage
    })
  ), { dispatch: false });

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
