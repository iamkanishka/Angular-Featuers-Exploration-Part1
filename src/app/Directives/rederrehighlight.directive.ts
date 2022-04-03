import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRederrehighlight]'
})
export class RederrehighlightDirective implements OnInit {

  constructor(private element: ElementRef, private rederer: Renderer2) { }

  ngOnInit(): void {
 //Changing Style on Initializartion
//    this.rederer.setStyle(this.element.nativeElement, 'background-color', 'green')
}

  @HostListener('mouseenter') onmouseover(event: Event) {
 //Changing Style on mouseover
   this.rederer.setStyle(this.element.nativeElement, 'background-color', 'green')
  }
  @HostListener('mouseleave') onmouseleave(event: Event) {
    //Changing Style on mouseleave
      this.rederer.setStyle(this.element.nativeElement, 'background-color', 'yellow')
     }
   

}
