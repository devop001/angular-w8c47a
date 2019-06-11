import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todofilter',
  templateUrl: './todofilter.component.html',
  styleUrls: ['./todofilter.component.css']
})
export class TodofilterComponent implements OnInit {
  @Output() ChangeFilter  = new EventEmitter<string>();  
  selectedStatus:string;
  constructor() { }

  ngOnInit() {
    this.selectedStatus = "All";
  }
  
  toggle(status:string)
  {
    this.selectedStatus = status;

    this.ChangeFilter.emit(status);
  }
}