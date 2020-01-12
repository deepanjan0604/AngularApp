import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-inputeditor',
  templateUrl: './inputeditor.component.html',
  styleUrls: ['./inputeditor.component.css']
})
export class InputeditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* name= new FormControl('');


  update(){

    this.name.setValue('Deepanjan');
  } */

  /* groupForm= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  onSubmit(){

    console.log(this.groupForm.value);
  }

  groupingForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl(''),
    })
  }); */

  onSubmit(){

    console.log(this.groupingForm1.value);
  }
  groupingForm1 = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    dob: new FormGroup({
      year: new FormControl(''),
      month: new FormControl(''),
      day: new FormControl('')
    })
  });
  update(){
    this.groupingForm1.patchValue({
      firstname: 'Deep',
      email: 'xyz@xyz.com',
      dob:{
        year: '1994'
      }
    });
  }

  

}
