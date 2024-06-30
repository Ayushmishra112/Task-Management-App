import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() updateTask = new EventEmitter<Task>();
  @Output() updateStatus = new EventEmitter<Task>();
  @Output() editTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<Task>();

  onUpdateStatus(status: 'to-do' | 'in-progress' | 'completed') { 
    this.updateStatus.emit({ ...this.task, status });
  }

  onEdit() {
    this.editTask.emit(this.task);
  }

  onDelete() {
    this.deleteTask.emit(this.task);
  }
}
