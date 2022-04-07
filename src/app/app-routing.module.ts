import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiceusersComponent} from '../app/ServiceDemo/serviceusers/serviceusers.component'

import { UserspartoneComponent } from './userspartone/userspartone.component';


const routes: Routes = [
  {path:'',component:UserspartoneComponent},

  {path:'usersservices',component:ServiceusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
