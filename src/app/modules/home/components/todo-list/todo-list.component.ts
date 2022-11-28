import { Component } from '@angular/core';

//Interface
import {TaskList} from "../../model/task-list";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [];

  public deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(): void {
    const confirm =  window.confirm("Do you want to delete all tasks?");

    if (confirm){
      this.taskList = [];
    }
  }

  setEmitTaskList(event: string): void{
    this.taskList.push({ task: event, checked: false })
  }
}
