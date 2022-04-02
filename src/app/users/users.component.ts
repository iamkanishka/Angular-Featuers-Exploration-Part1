import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  //Selector should be different for every compoenent
  //Below Selector is registerd with as a app-users as element
  selector: 'app-users',

  //Below Selector is registerd with as a app-users as Attribute
  //selector: '[app-users]',

  //Below Selector is registerd with as a app-users as Attribute
  //selector: '.app-users',

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
  allowNewUser: Boolean = false;
  userCreatedStatus: String = 'No User is Created';
  userNameForOneWay = '';
  userNameForTwoWay = 'Kanshka Naik';
  isUserCreated: Boolean = false;
  users: any[] = ['kansihka', 'Robin Williams', 'Dev Anand'];
  userStatus: string = '';

  user = 'Kanishka Naik';
  userId: String = '123';

  //Whenever the Component is Called the Constructor is Called
  constructor() {
    //setting  this.allowNewUser=true after 3 seconds for Propery Binding
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
    this.userStatus = Math.random() > 0.5 ? 'Online' : 'Offline';

    //Makeing User Status  Dynamic
    // this.userStatus= Math.random() >0.5 ? 'Online' : 'Offline'
    this.userStatus = 'Offline';
  }

  ngOnInit(): void {}

  changeUserCreatedStatusChange() {
    this.isUserCreated = true;
    //ngIf demo
    // this.userCreatedStatus = 'User Created'

    //ngFor Demo
    this.users.push(this.userNameForOneWay);
  }

  onAddofUser(event: Event) {
    //comnsoling the event data from the Input Field

    // Since the event  is Unknow trigger by form or a Button  or any Other Event then we can Specify the which type of Event
    console.log((event.target as HTMLInputElement).value);
    // HTMLInputElement - one of the way for initialization
    //  this.userNameForOneWay = (<HTMLInputElement>event.target).value

    // HTMLInputElement - Other  way for initialization
    this.userNameForOneWay = (event.target as HTMLInputElement).value;
  }
  //Function Returning the user Status
  getUserStatus() {
    return this.userStatus;
  }

  getColor() {
    if (this.userStatus == 'Online') {
      return 'green';
    } else {
      return 'red';
    }
  }
}
