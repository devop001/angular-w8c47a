import { Injectable } from '@angular/core';
import {Task} from './task';
@Injectable()
export class DataService {
  
  public arrTask:Array<Task>;
  
  constructor() {
    this.arrTask = new Array<Task>();
   }

   addTask(task:Task)
   {
      this.arrTask.push(task);
   }

}