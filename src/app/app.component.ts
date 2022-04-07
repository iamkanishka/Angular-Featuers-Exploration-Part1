import { Component } from '@angular/core';
import { ServiceusersService } from './Services/serviceusers/serviceusers.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ServiceusersService]
})
export class AppComponent {
  title = 'Angular Features';

}
