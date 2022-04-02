import { Component, Input, OnInit,  EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input('user') userName:String = ''


  

  constructor() { 
 }

  ngOnInit(): void {
  }

  sendUserAddStatus()
{
 
}

}
