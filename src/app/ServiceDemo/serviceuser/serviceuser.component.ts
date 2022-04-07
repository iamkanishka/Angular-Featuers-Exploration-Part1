import { Component, Input, OnInit } from '@angular/core';
import { ServiceusersService } from 'src/app/Services/serviceusers/serviceusers.service';

@Component({
  selector: 'app-serviceuser',
  templateUrl: './serviceuser.component.html',
  styleUrls: ['./serviceuser.component.scss'],

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


}
