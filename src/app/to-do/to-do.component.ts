import { Component, OnInit, Input, Output } from '@angular/core';
import {HttpDataService} from '../basic-http.service';
import {EventEmitterServiceService } from '../event-emitter-service.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  
   @Input() public task:Array<any>;
   constructor(    
   
    private ser: HttpDataService,
     private eventEmitterService: EventEmitterServiceService
  ) { }
  show()
  {
  
  }
  ngOnInit() {

        if (this.eventEmitterService.toDoSubsVar == undefined) {    
      this.eventEmitterService.toDoSubsVar = this.eventEmitterService.reloadToDoList.subscribe(() => {
          this.loadList();  
      });    
    }  
   
    this.loadList();
    }

    loadList()
    {
       this.ser.getAll("task","q={'statusID': 0}").subscribe(
          (val) => {
           this.task = val;
           console.log(this.task);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
    }
}
    
  