import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  dish = {
    dishId : 1, title : "lorem ipsum", description : "lorem ipsum dolum",
    steps : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, illum. Repellendus autem porro rerum commodi ut consequuntur vel provident ipsum nihil reprehenderit illum iste alias, explicabo nam unde vero aperiam!"
  }

  constructor() { }

  ngOnInit(): void {
  }
}
