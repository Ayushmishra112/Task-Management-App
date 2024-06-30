import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { taskReducer } from './task.reducer';

export const reducers: ActionReducerMap<AppState> = {
  tasks: taskReducer
};
