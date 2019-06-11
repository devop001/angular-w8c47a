import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import {EventEmitterServiceService } from './event-emitter-service.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor()
  {
     
     setTheme('bs4'); // or 'bs4'
  }

  name = 'Angular';
}
