import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  exportTasksToCSV(tasks: Task[]) {
    const csvData = this.convertToCSV(tasks);
    const blob = new Blob([csvData], { type: 'text/csv' });
    saveAs(blob, 'tasks.csv');
  }

  private convertToCSV(tasks: Task[]): string {
    const header = 'Title,Description,Due Date,Priority,Status\n';
    const rows = tasks.map(task => `${task.title},${task.description},${task.dueDate},${task.priority},${task.status}`).join('\n');
    return header + rows;
  }
}
