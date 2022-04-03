import { Directive,TemplateRef, Input, ViewContainerRef, OnInit, OnChanges } from '@angular/core';


@Directive({
  selector: '[appAlternatengif]'
})
export class AlternatengifDirective implements OnChanges {
//Normal mmethod of initilizing the input variable for the Directive
  //@Input() appAlternatengif:boolean =true

  @Input() set appAlternatengif(condition :boolean){
    if(condition){
             this.viewcontainerref.createEmbeddedView(this.templateref)
           }else{
             this.viewcontainerref.clear()
           }
  }





  constructor(private viewcontainerref:ViewContainerRef, private templateref:TemplateRef<any> ) {
 
   }

//this works when the directive is initialized with predefined value
// If you work with Set pproperty you dont need to add ngonChnages
//this works fine with when nrmal way of Input Variable initialization
  //  ngOnInit(): void {
  //      if(this.appAlternatengif){
  //        this.viewcontainerref.createEmbeddedView(this.templateref)
  //      }else{
  //        this.viewcontainerref.clear()
  //      }
  //  }

//this works when the directive is initialized with  varaible value eg: when there toggling of boolean varailbe with true/false

   ngOnChanges(): void {
    // if(this.appAlternatengif){
    //   this.viewcontainerref.createEmbeddedView(this.templateref)
    // }else{
    //   this.viewcontainerref.clear()
    // }
}




}
