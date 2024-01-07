import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Item} from '../item';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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
  @ViewChild('miTabla') content!:ElementRef;
  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.list);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  public SavePDF(){
    let content=this.content.nativeElement;
    let doc = new jsPDF();
    autoTable(doc, { html: '#miTabla' })
    // doc.save('my_table.pdf')
    // let _elementHandlers =
    // {
    //   '#editor':function(element,renderer){
    //     return true;
    //   }
    // };
    // doc.fromHTML(content.innerHTML,15,15,{

    //   'width':190,
    //   'elementHandlers':_elementHandlers
    // });

    doc.save('test.pdf');
  }
}
