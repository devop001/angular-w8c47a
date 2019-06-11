import { Component, OnInit, Input, Output } from '@angular/core';
import {HttpDataService} from '../basic-http.service';
import {EventEmitterServiceService } from '../event-emitter-service.service';
import { TodofilterComponent } from './todofilter/todofilter.component';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  
   @Input() public task:Array<any>;
   currentStatusID:number;
   isLoading:boolean;
   constructor(    
   
    private ser: HttpDataService,
     private eventEmitterService: EventEmitterServiceService
  ) { }
  show()
  {
  
  }

  onFilterChange(status:string)
  {
    switch(status)
    {
      case "All":
      this.currentStatusID = -1;
      break;
      case "Pending":
      this.currentStatusID = 0;
      break;
      case "Completed":
      this.currentStatusID = 1;
      break;
    }
    this.loadList(this.currentStatusID);
  }

  ngOnInit() {

        if (this.eventEmitterService.toDoSubsVar == undefined) {    
      this.eventEmitterService.toDoSubsVar = this.eventEmitterService.reloadToDoList.subscribe(() => {
          this.loadList(this.currentStatusID);  
      });    
    }  
   
    this.loadList(-1);
    }

    loadList(statusID:number)
    {
       this.isLoading =true;
       
       if(statusID > -1)
       {
        this.ser.getAll("task","q={'statusID': " + statusID + "}").subscribe(
            (val) => {
            this.task = val;
               this.isLoading =false;
            console.log(this.task);
          },
          response => {
            this.isLoading =false;
              console.log("POST call in error", response);
          },
          () => {
            this.isLoading =false;
              console.log("The POST observable is now completed.");
          });
       }
       else
       {
          this.ser.getAll("task","").subscribe(
            (val) => {
            this.isLoading =false;
            this.task = val;
            console.log(this.task);
          },
          response => {
              this.isLoading =false;
              console.log("POST call in error", response);
          },
          () => {
              this.isLoading =false;
              console.log("The POST observable is now completed.");
          });
       }

    }
}
    
  