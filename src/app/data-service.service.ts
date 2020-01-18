import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { timeout } from 'q';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { 
   
  }
  public restData:any;
  saveDetails(data){
    this.restData=data;
   //return this.restData;
   // return restData;
  }

  getDetails(){
   
    return this.restData;
  }

  public loadDetails(){

    
     return this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((data => console.log(data)))
  
    
    
  }
}
