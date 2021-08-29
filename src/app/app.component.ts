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
    }
  ]
}
