import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-simple',
  templateUrl: './table-simple.component.html',
  styleUrls: ['./table-simple.component.scss']
})
export class TableSimpleComponent implements OnInit {

  @Input() columns;
  @Input() dataSource;

  constructor() { }

  ngOnInit(): void {
  }
}