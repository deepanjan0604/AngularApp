import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
