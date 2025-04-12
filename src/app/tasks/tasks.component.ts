import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {


  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  idAddingTask = false;
  //private tasksService =  new TasksService();

  constructor(public tasksService: TasksService){}


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string){
  //   //...
  //   //this.tasks = this.tasks.filter((task) => task.id !== id)
  // }
  onStartAddTask(){
    this.idAddingTask = true;
  }

  onCloseAddTask()
  {
    this.idAddingTask = false;
  }

  // onAddTask(taskData:NewTaskData) {
  //     // this.tasks.push({
  //     //     id: new Date().getTime().toString(),
  //     //     userId:this.userId,
  //     //     title: taskData.title,
  //     //     summary: taskData.summary,
  //     //     dueDate:taskData.date
  //     //   })
  //       this.idAddingTask = false;
  //   }
}
