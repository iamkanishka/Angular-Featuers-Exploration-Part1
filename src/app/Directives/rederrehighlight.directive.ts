import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRederrehighlight]'
})
export class RederrehighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') color: string | undefined

  constructor(private element: ElementRef, private rederer: Renderer2) {
    this.color = 'red'
  }

  ngOnInit(): void {
    //Changing Style on Initializartion
    //    this.rederer.setStyle(this.element.nativeElement, 'background-color', 'green')
  }

  @HostListener('mouseenter') onmouseover(event: Event) {
    //Changing Style on mouseover
    //Using native way
    // this.rederer.setStyle(this.element.nativeElement, 'background-color', 'green')

    // Using HostBinding
    this.color = 'green'

  }
  @HostListener('mouseleave') onmouseleave(event: Event) {
    //Changing Style on mouseleave
    //Using native way
    // this.rederer.setStyle(this.element.nativeElement, 'background-color', 'yellow')
    // Using HostBinding
    this.color = 'yello'
  }

  @HostListener('click') onClick(event: Event) {
    //Changing Style on mouseleave
    //Using native way

    // this.rederer.setStyle(this.element.nativeElement, 'background-color', 'blue')
    // Using HostBinding
    this.color = 'blue'
  }


}
