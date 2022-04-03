import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';


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

  // View Encapsulation(CSS) Special Identifuer is Removed from the ViewEncapsulation.None
  //encapsulation:ViewEncapsulation.None
  // View Encapsulation Special Identifuer is Removed from the ViewEncapsulation.ShadowDom 
  //Note: Shadow DOM is not suppoerted by the Browsers
  // encapsulation:ViewEncapsulation.ShadowDom

  //Note: Shadow DOM is Replaced with Emulated
  // encapsulation:ViewEncapsulation.Emulated
})
export class UsersComponent implements OnInit, AfterContentInit {
  allowNewUser: Boolean = false;
  userCreatedStatus: String = 'No User is Created';
  userNameForOneWay = '';
  userNameForTwoWay = 'Kanshka Naik';
  isUserCreated: Boolean = false; 
  users: any[] = ['kansihka', 'Robin Williams', 'Dev Anand'];
  userStatus: string = '';
  isDivAvailable:boolean=false

  userAddedStatusOutput: any

  user = 'Kanishka Naik';
  userId: String = '123';

    //Content Child Demo
    @ContentChild('userParagraph') userParagraph: ElementRef | undefined


nameforngonChnages:String = 'Kanishka ngonchnages'

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

  ngOnInit(): void {

    //Content Chold Demo
 //Note :- Contenet Child Wont Work on the ngOninit
 console.log('userParagraph',this.userParagraph)
   }

  changeUserCreatedStatusChange() {
    this.isUserCreated = true;
    //ngIf demo
    // this.userCreatedStatus = 'User Created'

    //ngFor Demo
    this.users.push(this.userNameForOneWay);
    //Getting Output from the User Compoenent

  }

  onUserAdded(event: string) {
    this.isUserCreated = true;
    //ngIf demo
    // this.userCreatedStatus = 'User Created'

    //ngFor Demo
    this.users.push(event);
    //Getting Output from the User Compoenent

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

 // ngOnChanges Demo
  changeName(){
 this.nameforngonChnages = 'Hot Shot Kanoshka'
  }

  onDeleteComponent(){
    this.users = []
  }


  
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(' ngAfterContentInit Called')

     //Note :- Contenet Child Wont Work on the ngOninit
     //Note :- Contenet Child Wil  Work on the ngAfterContentInit

 console.log('userParagraph',this.userParagraph)
 console.log('userParagraph',this.userParagraph?.nativeElement.textContent)


  }

}
