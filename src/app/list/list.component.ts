import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '22-02-2022', weight: 1.0079, symbol: 'H'},
  {position: 2, name: '22-02-2022', weight: 4.0026, symbol: 'He'},
  {position: 3, name: '22-02-2022', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'B22-02-2022', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: '22-02-2022', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},

];


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
