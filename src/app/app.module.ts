import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import {FormsModule} from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component'
import {HightlightDirective} from './Directives/highlight.directive';
import { RederrehighlightDirective } from './Directives/rederrehighlight.directive';
import { AlternatengifDirective } from './Directives/alternatengif.directive';
import { ServiceusersComponent } from './ServiceDemo/serviceusers/serviceusers.component';
import { ServiceaddusersComponent } from './ServiceDemo/serviceaddusers/serviceaddusers.component';
import { ServiceuserComponent } from './ServiceDemo/serviceuser/serviceuser.component';
import { UserspartoneComponent } from './userspartone/userspartone.component';
import { LoggingserviceService } from './Services/loggingservice.service';


//Deceorator
@NgModule({
//Every Component has to be Registered in the Respoective
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    AddUserComponent,
    HightlightDirective,
    RederrehighlightDirective,
    AlternatengifDirective,
    ServiceusersComponent,
    ServiceaddusersComponent,
    ServiceuserComponent,
    UserspartoneComponent,
   
    
  ],
//Every Component has to be Registered in the Respective
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   

  ],
  //integreting Highest possible Service in the Provider
  providers: [LoggingserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
