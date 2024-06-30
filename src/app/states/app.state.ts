import { TaskState, selectTaskState } from '../reducers/task.reducer';

export interface AppState {
  tasks: TaskState;
}
