import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
user="Kanishka Naik"
  userId:String="123"
userStatus:String = "Online"
  constructor() { }

  ngOnInit(): void {
  }
//Function Returning the user Status
  getUserStatus(){
   return this.userStatus
  }

}
