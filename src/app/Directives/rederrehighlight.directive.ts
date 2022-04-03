import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRederrehighlight]'
})
export class RederrehighlightDirective implements OnInit {

  constructor(private element:ElementRef, private rederer:Renderer2) { }

  ngOnInit(): void {
this.rederer.setStyle(this.element.nativeElement,'background-color','green')
      
  }

}
