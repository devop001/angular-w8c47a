import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    

@Injectable()
export class EventEmitterServiceService {
    
  invokeFirstComponentFunction = new EventEmitter();    
  subsVar: Subscription;    
  toDoSubsVar: Subscription;
  reloadToDoList = new EventEmitter();
    
  constructor() { }    

  onToDoList()
  {
       this.reloadToDoList.emit();
  }  

  onFirstComponentButtonClick(name:string) {
    debugger;
     
    this.invokeFirstComponentFunction.emit(name);    
  // }
  // else if(name == "reloadToList")
  // {
  //   this.reloadToDoList.emit();
  // }
}
      

}