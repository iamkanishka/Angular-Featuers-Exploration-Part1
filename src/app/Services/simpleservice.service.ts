import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleserviceService {

  constructor() { }

  loggingconsole(name:string){
    console.log(name)
  }
}
