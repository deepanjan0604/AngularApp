import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChildDetailsService {

  constructor() { }

  getDetails(){
    let arr=[{firstName:"Deep",lastName:"Deepanjan",age:"25"},{firstName:"Sooraj",lastName:"K",age:"25"}];
    return arr;
  }
}
