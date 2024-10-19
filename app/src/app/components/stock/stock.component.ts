import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  stockColumns = {
    labels : [
      "Descripción",
      "Cantidad",
      "Fecha de Expiración",
      "Acciones"
    ],
    values : [
      'description',
      'quantity',
      'expirationDate',
      'actions'
    ]    
  };

  ELEMENT_DATA = [
    {description: 1, quantity: 'Hydrogen', expirationDate: 1.0079, actions: 'H'},
    {description: 2, quantity: 'Helium', expirationDate: 4.0026, actions: 'He'},
    {description: 3, quantity: 'Lithium', expirationDate: 6.941, actions: 'Li'},
    {description: 4, quantity: 'Beryllium', expirationDate: 9.0122, actions: 'Be'},
    {description: 5, quantity: 'Boron', expirationDate: 10.811, actions: 'B'},
    {description: 6, quantity: 'Carbon', expirationDate: 12.0107, actions: 'C'},
    {description: 7, quantity: 'Nitrogen', expirationDate: 14.0067, actions: 'N'},
    {description: 8, quantity: 'Oxygen', expirationDate: 15.9994, actions: 'O'},
    {description: 9, quantity: 'Fluorine', expirationDate: 18.9984, actions: 'F'},
    {description: 10, quantity: 'Neon', expirationDate: 20.1797, actions: 'Ne'},
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

