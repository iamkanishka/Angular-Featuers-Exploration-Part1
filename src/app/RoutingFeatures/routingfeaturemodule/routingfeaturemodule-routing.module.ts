import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingentrycomponenetComponent } from '../routingentrycomponenet/routingentrycomponenet.component';
import { HomeComponent } from '../home/home.component';
import { CategoriesComponent } from '../categories/categories.component';
import { UsersComponent } from '../users/users.component';
const routes: Routes = [
  {
    path: 'routingFeaturesEntryPoint',
    component: RoutingentrycomponenetComponent,
  },

  { path: 'routingFeaturesEntryPointhome', component: HomeComponent },
  { path: 'routingFeaturesEntryPointusers', component: UsersComponent },

  {
    path: 'routingFeaturesEntryPointcategories',
    component: CategoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingfeaturemoduleRoutingModule { }
