import { Component, OnInit } from '@angular/core';
import { ServiceusersService } from '../../Services/serviceusers/serviceusers.service';


@Component({
  selector: 'app-serviceaddusers',
  templateUrl: './serviceaddusers.component.html',
  styleUrls: ['./serviceaddusers.component.scss'],

})
export class ServiceaddusersComponent implements OnInit {
// Demo on the 
userName!:string;
userStatus!:string
  constructor(private serviceusersService:ServiceusersService) { }

  ngOnInit(): void {
  }
  onUserAdded(){
    console.log('useradded')
this.serviceusersService.addUser(this.userName,this.userStatus)
  }


}
