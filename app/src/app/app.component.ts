import { Component } from '@angular/core';
import { AppConstants } from 'src/utils/app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  appConstants = AppConstants;
}
