import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md'
import { ReactiveFormsModule } from '@angular/forms';
import { EventEmitterServiceService } from './event-emitter-service.service';
import { DataService } from './data.service';
import { HttpDataService } from './basic-http.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {Configuration} from './appconstants';
import { TodofilterComponent } from './to-do/todofilter/todofilter.component';


// For MDB Angular Pro

@NgModule({ 
  imports: [ BrowserModule, FormsModule, ModalModule,
      ReactiveFormsModule,HttpClientModule,
MDBBootstrapModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, ToDoComponent, ToDoDetailComponent, HeaderComponent, ToDoAddComponent, TodofilterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EventEmitterServiceService, DataService, HttpClient, Configuration,HttpDataService]
})
export class AppModule { }
