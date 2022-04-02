import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userName: string = ""
  @Output() userAdded = new EventEmitter<string>();

  @ViewChild('userInput') userInput:any

  constructor() { }

  ngOnInit(): void {
  }

  //Child parent Demo 
  //   onUserAdded() {
  //  this.userAdded.emit(this.userName)

  //   }

  //Local Reference
  // onUserAdded(userInput:HTMLInputElement) {
  //   this.userAdded.emit(userInput.value)
  //    }


  //@View Child Reference 
    onUserAdded() {
      console.log(this.userInput.nativeElement.value)
   this.userAdded.emit(this.userInput.nativeElement.value)
   //You Can Even Initialize the Input Element
   //this.userInput.nativeElement.value='Hi Kanishka'
    }

}
