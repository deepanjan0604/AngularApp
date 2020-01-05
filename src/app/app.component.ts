import { Component } from '@angular/core';

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
constructor(){
  setTimeout(() => {
    return this.buttonDisplay=false;
  }, 1000);
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
