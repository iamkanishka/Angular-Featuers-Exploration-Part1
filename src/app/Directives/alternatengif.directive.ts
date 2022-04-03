import { Directive,TemplateRef, Input, ViewContainerRef, OnInit } from '@angular/core';


@Directive({
  selector: '[appAlternatengif]'
})
export class AlternatengifDirective implements OnInit {

  @Input() appAlternatengif:boolean =true
  constructor(private viewcontainerref:ViewContainerRef, private templateref:TemplateRef<any> ) {
 
   }
//this works when the directive is initialized with predefined value
   ngOnInit(): void {
       if(this.appAlternatengif){
         this.viewcontainerref.createEmbeddedView(this.templateref)
       }else{
         this.viewcontainerref.clear()
       }
   }

//this works when the directive is initialized with  varaible value eg: when there toggling of boolean varailbe with true/false

   ngOnChanges(): void {
    if(this.appAlternatengif){
      this.viewcontainerref.createEmbeddedView(this.templateref)
    }else{
      this.viewcontainerref.clear()
    }
}




}
