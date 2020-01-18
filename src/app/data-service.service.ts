import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { 
  }

  ngOnIt(){

  }
  public restData:any;
  public restData1;
  saveDetails(data){
    this.restData=data;
   //return this.restData;
   // return restData;
  }



  public loadDetails(){
   return this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((data => this.returnDetails(data)));
  }
  returnDetails(data){
    this.restData1=data;

  }

  getDetails(){
   
    return this.restData1;
    //return this.restData;
  }
}
