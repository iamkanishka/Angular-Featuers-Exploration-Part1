import { Injectable } from '@angular/core';

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

  constructor() {}

  addUser(name: string, status: string) {
    this.users.push({ name, status });
  }
  updateUserstatus(index:number) {
    if(this.users[index].status=="Active"){
      this.users[index].status=="InActive";
  }else{
     this.users[index].status=="Active";
    }
  }
}
