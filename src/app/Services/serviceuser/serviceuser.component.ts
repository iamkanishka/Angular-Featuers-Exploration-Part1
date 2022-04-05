import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serviceuser',
  templateUrl: './serviceuser.component.html',
  styleUrls: ['./serviceuser.component.scss']
})
export class ServiceuserComponent implements OnInit {

  @Input() user:{ name: string; status: string; } | undefined 
  constructor() { }

  ngOnInit(): void {
  }

}
