import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-component',
  templateUrl: './age-component.component.html',
  styleUrls: ['./age-component.component.css']
})
export class AgeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayEvenOdd
  display=false;
  firstName;
  lastName;
  email;
  age;
  birthYear;
  arr=[1,2,3,4,5,6,7];
/*employee={
  firstName:"",
  lastname:"",
  email:"",
  age:""
};*/
ageComponent(){

  this.display=true;
  // code to calculate year of birth
  var today = new Date();
  var currentYear = today.getFullYear() ;
 
  this.birthYear =  currentYear - this.age - (false ? 0 : 1);
}
}
