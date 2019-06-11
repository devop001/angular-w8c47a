import { Component, OnInit, Input } from '@angular/core';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md'
import {EventEmitterServiceService } from '../event-emitter-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private eventEmitterService:EventEmitterServiceService) { }

  ngOnInit() {
  }

  
  framShow()
{
    this.eventEmitterService.onFirstComponentButtonClick("");    
}

}