import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  //temlateUrl is for integrating template with URL of  template File
   templateUrl: './users.component.html',
  //temlate is for integrating template with just HTML Elements
   //template: '<app-user></app-user><app-user></app-user>',
  //styleUrls is for integrating styles with URL of  styles File
   styleUrls: ['./users.component.scss'],
  })
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
