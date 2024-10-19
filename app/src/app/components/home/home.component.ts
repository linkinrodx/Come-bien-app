import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/utils/app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly AppConstants = AppConstants

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  changeRoute(route){
    switch (route) {
      case AppConstants.Routes.productList:
        this.router.navigate([AppConstants.Routes.productList]);
        break;
      case AppConstants.Routes.stock:
        this.router.navigate([AppConstants.Routes.stock]);
        break;
      case AppConstants.Routes.dishList:
        this.router.navigate([AppConstants.Routes.dishList]);
        break;    
      default:
        break;
    }
  }
}
