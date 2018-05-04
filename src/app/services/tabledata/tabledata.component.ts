import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { BackendService } from '../backend.service';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'table-data',
  styleUrls: ['tabledata.component.css'],
  templateUrl: 'tabledata.component.html',
})
export class TabledataComponent implements OnInit {
  displayedColumns = ['ROLLNO','SESSION_ID', 'CLS', 'STD_NM', 'FATH_NM', 'PERCENT'];
  //dataSource: MatTableDataSource<any>;
  dataSource = new MatTableDataSource();
  members;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _dataService: BackendService) { }

  ngOnInit() {
    //return this._dataService.getData().subscribe(res => this.dataSource.data = res["0"]["data"]);
    return this._dataService.getDocs().subscribe(res => this.dataSource.data = res);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}