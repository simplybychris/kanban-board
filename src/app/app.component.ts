import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task } from './task/interfaces/task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todo: Task[] = [
    {
      title: 'Learn new framework',
      description: "Find interesting framework and learn it",
    },
    {
      title: 'Make a Kanban App',
      description: "Make a Kanban App using Angular and Firebase"
    },
    {
      title: 'Abce',
      description: "Make a Kanban App using Angular and Firebase"
    }
  ];

  inProgress: Task[] = [];
  done: Task[] = [];

  editTask(list: string, task: Task): void { }

  drop(event: CdkDragDrop<Task[] | any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.previousContainer.data, event.previousIndex, event.currentIndex);
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

}
