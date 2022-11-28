import {Component, DoCheck} from '@angular/core';

//Interface
import {TaskList} from "../../model/task-list";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  implements DoCheck{
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]') ;

  ngDoCheck() {
    this.setLocalStorage();
  }

  public deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(): void {
    const confirm =  window.confirm("Do you want to delete all tasks?");

    if (confirm){
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string): void{
    this.taskList.push({ task: event, checked: false })
  }

  public validationInput(event: string, index: number): void {
    if (event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?");

      if (confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage(): void {
    if (this.taskList){
      this.taskList.sort((first, last)=>Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
