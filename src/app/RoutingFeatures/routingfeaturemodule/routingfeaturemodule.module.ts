import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingfeaturemoduleRoutingModule } from './routingfeaturemodule-routing.module';
import { RoutingentrycomponenetComponent } from '../routingentrycomponenet/routingentrycomponenet.component';
import { HomeComponent } from '../home/home.component';
import { CategoriesComponent } from '../categories/categories.component';
import { UsersComponent } from '../users/users.component';


@NgModule({
  declarations: [RoutingentrycomponenetComponent,HomeComponent,CategoriesComponent,UsersComponent],
  imports: [
    CommonModule,
    RoutingfeaturemoduleRoutingModule
  ]
})
export class RoutingfeaturemoduleModule { }
