import {  Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';

import {EventEmitterServiceService } from '../event-emitter-service.service';
import { InputsModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import {DataService } from '../data.service';
import {HttpDataService} from '../basic-http.service';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.css']
})
export class ToDoAddComponent implements OnInit {


  @ViewChild('frame') public showModalOnClick: any;
  taskForm: FormGroup;
 constructor(    
    private eventEmitterService: EventEmitterServiceService ,
    private dataService:DataService  , private formBuilder: FormBuilder ,
    private dataServiceHttp: HttpDataService
  ) { }

   ngOnInit() {   
      this.taskForm  =  this.formBuilder.group({
        taskName: ['', Validators.required],
        taskDesc: ['', Validators.required],
        fromDate: ['', Validators.required],
        toDate: ['', Validators.required]
    }); 

    if (this.eventEmitterService.subsVar == undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {
        this.show();    
      });    
    }    
  }    
    
Add()
{
 
  var a = this.taskForm.value;
  a.statusId = 0;
  this.dataServiceHttp.add<any>(a,"task").subscribe(
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

  //this.showModalOnClick.hide();
}


  show()
  {
    this.showModalOnClick.show();
  }

}