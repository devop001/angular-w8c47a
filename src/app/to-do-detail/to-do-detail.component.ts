import { Component, OnInit , Input} from '@angular/core';
import { AccordionModule } from 'ngx';
import {HttpDataService} from '../basic-http.service';
import {EventEmitterServiceService } from '../event-emitter-service.service';

@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.css']
})
export class ToDoDetailComponent implements OnInit {
   @Input() item:any;
  constructor(private dataServiceHttp: HttpDataService,
      private eventEmitterService: EventEmitterServiceService ) { }

  ngOnInit() {
   
  }
  
ChangeStatus(statusId: number,taskID: string)
{
  if(statusId == 0)
  {
    statusId = 1;
  }
  else
  {
      statusId = 0;
  }
   debugger;
   var itemnew = this.item;
   itemnew.statusID = statusId;
   this.dataServiceHttp.update<any>(taskID, itemnew,"task").subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
                        this.eventEmitterService.onToDoList();
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
    });

  }
}