import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingserviceService {

  constructor() { }
  loggingconsole(name:string){
    console.log(name)
  }

}
