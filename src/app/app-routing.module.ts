import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceusersComponent } from '../app/ServiceDemo/serviceusers/serviceusers.component';
import { CategoriesComponent } from './RoutingFeatures/categories/categories.component';
import { HomeComponent } from './RoutingFeatures/home/home.component';
import { RoutingentrycomponenetComponent } from './RoutingFeatures/routingentrycomponenet/routingentrycomponenet.component';
import { UsersComponent } from './RoutingFeatures/users/users.component';
import { UserspartoneComponent } from './userspartone/userspartone.component';

RoutingentrycomponenetComponent;
const routes: Routes = [
  //creating Basic routes
  { path: '', component: UserspartoneComponent },
  { path: 'usersservices', component: ServiceusersComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
