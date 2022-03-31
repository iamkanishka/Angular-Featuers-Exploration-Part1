import { Component, OnInit } from '@angular/core';

@Component({
  //Selector should be different for every compoenent
  //Below Selector is registerd with as a app-users as element
  // selector: 'app-users',
  
  //Below Selector is registerd with as a app-users as Attribute
  //selector: '[app-users]',

   //Below Selector is registerd with as a app-users as Attribute
   selector: '.app-users',

  //temlateUrl is for integrating template with URL of  template File
  templateUrl: './users.component.html',
  //If we have less linefor the HTML Code we can use "template" and and if we have huge ammount of theHTMl then please prefer the "templateURL" 
  //temlate is for integrating template with just HTML Elements
  //template: '<app-user></app-user><app-user></app-user>',

  //styleUrls is for integrating styles with URL of  styles File
  //In styleURL we have an array for style files initialization if we have more than one style files, we can initialize in the styleURLs 
  styleUrls: ['./users.component.scss'],
  //Defining Component CSS using styles
  //    styles: [
  //     `h3{
  //       color: red;
  //     }`
  //  ]
})
export class UsersComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
