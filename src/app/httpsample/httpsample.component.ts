import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-httpsample',
  templateUrl: './httpsample.component.html',
  styleUrls: ['./httpsample.component.css']
})
export class HttpsampleComponent implements OnInit {

  private restData:any;
  constructor(private iservice:DataServiceService) {
    debugger; 
    this.restData=this.iservice.getDetails();
  }
  display=false;
  displayForm=false;
  id;
 
  data1;
  ngOnInit() {
  }
  param;
  displayData(data){
    data=this.iservice.getDetails();
    this.display=true;
    this.displayForm=false;
    debugger;
  }
  getData(){
    debugger;
    console.log(this.id);
    var i=parseInt(this.id);
    this.restData=this.iservice.getDetails();
    this.data1=this.restData[i-1];
    this.displayForm=true;
    debugger;
  }

}
