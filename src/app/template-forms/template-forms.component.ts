import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userDetails={userName:"deep",password:"simplilearn"};
  display=false;
  displayForm=true;

  loggingForm(value:any){
    console.log(value);
    if(value.user.userName == this.userDetails.userName && value.user.password == this.userDetails.password){
      this.display=true;
      this.displayForm=false;
    }
  }

}
