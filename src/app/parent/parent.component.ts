import { Component, OnInit } from '@angular/core';
import { DatetimeService } from '../datetime.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private iservice:DatetimeService) { }
  date;
  
  ngOnInit() {
    this.date=this.iservice.displayTime();
  }
  
  //messageToSend: string='value';
  //messageToSend: object='value';

  recieveFromChild: any;
  getMessage(arr:any){
    debugger;
  this.recieveFromChild=arr;
  console.log(arr);

  }



}
