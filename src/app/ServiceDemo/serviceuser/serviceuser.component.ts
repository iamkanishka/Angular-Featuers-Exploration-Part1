import { Component, Input, OnInit } from '@angular/core';
import { ServiceusersService } from 'src/app/Services/serviceusers/serviceusers.service';

@Component({
  selector: 'app-serviceuser',
  templateUrl: './serviceuser.component.html',
  styleUrls: ['./serviceuser.component.scss'],
//providers:[ServiceusersService]
//unified instance of  ServiceusersService has been provided in the AppComponent

})
export class ServiceuserComponent implements OnInit {

  @Input() user!: { name: string; status: string; }; 
  @Input() userIndex!: number; 

  constructor(private serviceusersService:ServiceusersService) { }

  ngOnInit(): void {
  }

  updateStatus(){
    this.serviceusersService.updateUserstatus(this.userIndex)
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
