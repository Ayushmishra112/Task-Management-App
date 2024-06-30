import { createReducer, on, createSelector } from '@ngrx/store';
import { Task } from '../models/task.model';
import { addTask, updateTask, deleteTask } from '../actions/task.actions';
import { AppState } from '../states/app.state';


export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: []
};


export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task]
  })),
  on(updateTask, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => t.id === task.id ? task : t)
  })),
  on(deleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(t => t.id !== id)
  }))
);


export const selectTaskState = (state: AppState) => state.tasks;

export const selectAllTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);
