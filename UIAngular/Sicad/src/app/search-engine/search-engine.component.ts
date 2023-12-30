import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Item} from '../item';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-search-engine',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatTableModule],
  templateUrl: './search-engine.component.html',
  styleUrl: './search-engine.component.css'
})
export class SearchEngineComponent implements AfterViewInit{
  @Input() list!: Item[];
  Object = Object;
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.list);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
