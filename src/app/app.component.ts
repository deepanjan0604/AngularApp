import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataServiceService } from './data-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp- Demo';
  buttonDisplay=true;
  imgurl="../assets/image1.jpg";
  //imgurl="/Users/dpanjan/angularproject/AngularApp/src/assets/image1.jpg"; synchronization between the model and the view.

  trigger(){

    alert("Clicked");
  };

 restData1;
constructor(private http:HttpClient,private iservice:DataServiceService ){
  setTimeout(() => {
    return this.buttonDisplay=false;
  }, 1000);
 
}
restData;
cond=false;
timer;
index=0;
ngOnInit(){
this.http.get("https://jsonplaceholder.typicode.com/users").
subscribe((data => this.displayData(data))); 

/* this.http.get("http://jsonplaceholder.typicode.com/users").
subscribe((data => console.log(data))); 
 */


}

displayData(data){
  console.log(data);
  //this.restData=data;
  //this.iservice.saveDetails(this.restData);
  this.restData=[];
  this.cond=true;
  this.cond1=true;
debugger;
  if( data[0].name != "") { 
    this.restData[0]=data[0];
  }
  this.timer = setInterval(() => {
    if (this.index < data.length) {
      var i=this.index;
       this.restData[i]=data[i];
       this.index++;
    } else { 
       clearInterval(this.timer); // this is optional but good practice
    }
  }, 2000);
  //this.restData1=this.restData;
}


cond1=false;
counter=0;
loadDetails(){
 
 
/* 
  if( this.restData1[0]) { 
    this.restData.push(this.restData1[0]);
  }
  this.timer = setInterval(() => {
    if (this.index < this.restData1.length) {
       this.restData.push(this.restData1[this.index]);
       this.index++;
    } else { 
       clearInterval(this.timer); // this is optional but good practice
    }
  }, 2000); */
//  this.iservice.getDetails();
 /*  if(this.restData1.length != this.counter){
  this.loadDetails();
  }
  debugger; */

}


one=0;
two=0;
sum=0;
diff=0;
divide=0;
product=0;
compute(){
  this.sum=this.one+this.two;
  this.diff=this.one-this.two;
  this.divide=this.one/this.two;
  this.product=this.one*this.two;
}

}
