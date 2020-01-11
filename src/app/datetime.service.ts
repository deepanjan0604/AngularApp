import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }

  displayTime(){

    let time = new Date();
    return time;
  }
}
