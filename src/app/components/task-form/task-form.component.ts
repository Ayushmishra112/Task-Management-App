import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models/task.model';  

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;

  @Output() addTask = new EventEmitter<Task>();  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      priority: ['low', Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: generateUniqueId(),
        taskId: '', 
        title: this.taskForm.get('title')?.value,
        description: this.taskForm.get('description')?.value,
        dueDate: this.taskForm.get('dueDate')?.value,
        priority: this.taskForm.get('priority')?.value,
        status: 'to-do'
      };
      this.addTask.emit(newTask);  
      this.taskForm.reset();
    }
  }
}

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9);
}
