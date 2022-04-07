import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LoggingserviceService } from '../loggingservice.service';


@Injectable({
  providedIn: 'root',
})
export class ServiceusersService {
  users = [
    { name: 'Knaishka', status: 'Active' },
    { name: 'Knaishka', status: 'Active' },
    { name: 'Knaishka', status: 'Active' },
    { name: 'Knaishka', status: 'Active' },
    { name: 'Knaishka', status: 'Active' },
    { name: 'Knaishka', status: 'Active' },
    { name: 'Knaishka', status: 'Active' },
    { name: 'Knaishka', status: 'Active' },
    { name: 'Knaishka', status: 'Active' },
    { name: 'Knaishka', status: 'Active' },
    { name: 'Knaishka', status: 'Active' },
    { name: 'Knaishka', status: 'Active' },
    { name: 'Knaishka', status: 'Active' },
  ];

  statusUpdtaed = new EventEmitter<string>();

  constructor(private loggingserviceService:LoggingserviceService) {}

  addUser(name: string, status: string) {
    this.users.push({ name, status });
    this.loggingserviceService.loggingStausConsole(status)

  }
  updateUserstatus(index:number) {
    console.log(index)
    if(this.users[index].status=="Active"){
      this.users[index].status="Inactive";
      this.statusUpdtaed.emit(this.users[index].status)
      console.log('Active check')
  }else{
     this.users[index].status="Active";
     console.log('Inactive')

    }
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
