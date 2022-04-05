import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiceusersComponent} from '../app/serviceusers/serviceusers.component'

const routes: Routes = [
  {path:'usersservices',component:ServiceusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
