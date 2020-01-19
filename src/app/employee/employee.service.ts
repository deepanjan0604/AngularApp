import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:any[]=[
    {"id":2001,"ename":"Anil","job":"Admin","salary":1100},
    {"id":2002,"ename":"Bobby","job":"Manager","salary":2200},
    {"id":2003,"ename":"Cathe","job":"Clerk","salary":3300},
    {"id":2004,"ename":"David","job":"Developer","salary":4400},
    {"id":2005,"ename":"Eman","job":"Manager","salary":5500}    
  ];

  constructor() { }
}
