import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingserviceService {

  constructor() { }
  loggingConsole(name:string){
    console.log(name)
  }

  loggingStausConsole(status:string){
    console.log('User Status'+status)
  }
}
