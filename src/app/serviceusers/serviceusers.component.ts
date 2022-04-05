import { Component, OnInit } from '@angular/core';
import { ServiceusersService } from '../Services/serviceusers/serviceusers.service';

@Component({
  selector: 'app-serviceusers',
  templateUrl: './serviceusers.component.html',
  styleUrls: ['./serviceusers.component.scss'],
  providers:[ServiceusersService]
})
export class ServiceusersComponent implements OnInit {

  users:{name:string,status:string}[]=[];
  constructor(private userservice:ServiceusersService) { }

  ngOnInit(): void {
   this.users =  this.userservice.users 
  }

}
