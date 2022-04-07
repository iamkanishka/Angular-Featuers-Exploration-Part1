import { Component, OnInit } from '@angular/core';
import { LoggingserviceService } from 'src/app/Services/loggingservice.service';
import { ServiceusersService } from '../../Services/serviceusers/serviceusers.service';


@Component({
  selector: 'app-serviceaddusers',
  templateUrl: './serviceaddusers.component.html',
  styleUrls: ['./serviceaddusers.component.scss'],
//providers:[ServiceusersService]
//unified instance of  ServiceusersService has been provided in the AppComponent

})
export class ServiceaddusersComponent implements OnInit {
// Demo on the 
userName!:string;
userStatus!:string
  constructor(private serviceusersService:ServiceusersService,private loggingserviceService:LoggingserviceService) { }

  ngOnInit(): void {
  }
  onUserAdded(){
    console.log('useradded')
this.serviceusersService.addUser(this.userName,this.userStatus)
this.loggingserviceService.loggingStausConsole(this.userStatus)

  }

  /**
 * Note:- On Provider Injection Dependency injection
 * Here we have three serviceusers, serviceuser, serviceadduser Compenents, and a user service 
 * the Service User is imported in serviceusers, serviceuser, serviceadduser , since it is imported as a Proivder along with instance so it acts as separate intsance in teh separate compoenent, so we need to provide the serivce in the Hierarchical Manner, so that we can acces it in a unified instance
 *  serviceusers, serviceuser, serviceadduser Compenents
 * App-Module -  Hightest Level -> Unified Instance will Shared accross all over the  app
 * App-Component - Next Highest Level -> same Instance will be Shared to all the Child Components but Services have differernt Instances
 * Child Componenets -> Each One will having a Different instances
 */

}
