import { Directive,ElementRef,HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {

  constructor(public elementRef:ElementRef) {

      elementRef.nativeElement.style.color="green";   
   }

@HostBinding('style.border') border;

   @HostListener('mouseover') onMouseOver(){
    this.elementRef.nativeElement.style.backgroundColor='red';
    this.border='5px solid black';
     
   }
   @HostListener('mouseleave') onMouseLeave(){
     this.elementRef.nativeElement.style.backgroundColor='white';
     this.border='0px solid black';
   }
   numberOfClicks=0;
   @HostListener('click', ['$event.target'])
   onClick(btn) {
     console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }
}
