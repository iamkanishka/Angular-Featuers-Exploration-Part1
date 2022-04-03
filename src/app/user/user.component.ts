import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ElementRef, ContentChild } from '@angular/core';
import { SimpleserviceService } from '../Services/simpleservice.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('user') userName: String = ''

  //ngOnchnages example
  @Input() name: String = ''
  




  constructor(private simpleserviceService:SimpleserviceService ) {
    //Constructor Will be Called First before the ngOnInit
    console.log('Constructor Called')
   
    //Use of Service for Unified function Usage
    this.simpleserviceService.loggingconsole('kanishka statc')
  }

  ngOnInit(): void {
    //ngOnInit Will be Called After  the Constructor
 console.log('ngOnInit Called')
    
 
  }

  //ngOnChnages will get triggered when there is a changes in the input field
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges Called')

    console.log(changes)

  }
  //Any Action  on the Browser, ngDoCheck will be Triggered 
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck Called')
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(' ngAfterContentInit Called')



  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log(' ngAfterContentChecked Called')

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(' ngAfterViewInit Called')

  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log(' ngAfterViewChecked Called')

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('Detroy Called')

  }

}
