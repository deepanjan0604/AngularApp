import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  public restData:any;
  saveDetails(data){
    this.restData=data;
   //return this.restData;
   // return restData;
  }

  getDetails(){
    return this.restData;

  }
}
