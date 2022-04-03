import {Directive, ElementRef, OnInit} from '@angular/core'

 // This is the native way creating directive (hightlight) 
@Directive({
    //selector: 'appHighlightText'
   // Note:- if you need to use the Directive YOu need to use this as a HTML Element
   
   selector: '[appHighlightText]'
   // if you need to use the Directive YOu need to use this as a HTML Element

})
export class HightlightDirective implements OnInit{

    constructor(private elementRef:ElementRef){
   
    }
    ngOnInit(): void {
    
      (this.elementRef.nativeElement as HTMLElement).style.backgroundColor='red';
    }


}