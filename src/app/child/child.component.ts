import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChildDetailsService } from '../child-details.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private iservice:ChildDetailsService) { }
  arr;
  ngOnInit() {
    this.arr=this.iservice.getDetails();
    }

  

  @Input() receivedFromParent: string;
  @Output() messageToEmit= new EventEmitter<any>();


  
  sendMessageToParent(){
    this.messageToEmit.emit(this.arr);
    //emit(arr);
  }
  getMessage(){this.sendMessageToParent();}

}
