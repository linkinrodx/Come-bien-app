import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/utils/app.constants';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {

  appConstants = AppConstants;
  datasource = [
    {dishId : 1, dish : "lorem ipsum", description : "lorem ipsum dolum"},
    {dishId : 2, dish : "lorem ipsum", description : "lorem ipsum dolum"},
    {dishId : 3, dish : "lorem ipsum", description : "lorem ipsum dolum"},
    {dishId : 4, dish : "lorem ipsum", description : "lorem ipsum dolum"},
    {dishId : 5, dish : "lorem ipsum", description : "lorem ipsum dolum"}
  ];

  constructor(
    private router : Router) { }

  ngOnInit(): void {
  }

  goToDetails(dishId){
    this.router.navigate([this.appConstants.Routes.dishList, dishId]);
  }
}
