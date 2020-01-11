import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arr=[{firstName:"Deep",lastName:"Deepanjan",age:"25"},{firstName:"Sooraj",lastName:"K",age:"25"}]

  @Input() receivedFromParent: string;
  @Output() messageToEmit= new EventEmitter<any>();


  
  sendMessageToParent(){
    this.messageToEmit.emit(this.arr);
    //emit(arr);
  }
  getMessage(){this.sendMessageToParent();}

}
