import { BackendService } from '../../services/backend.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // Add Form  
    savedDataFlag = false;
    members: any[];

    currentDate;
    currentDate7;
    data: any;
    myDocData: any;
    myCustID: any;
    dataLoading: boolean = false;
    brokenNetwork = false;
    toggleField: string;
    // searchable properties
    name: string;
    phone: number;
    fromdt: Date;
    todt: Date;
    // list mode
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['ROLLNO','SESSION_ID', 'CLS', 'STD_NM', 'FATH_NM', 'PERCENT','id'];

    constructor(private _eCRMFSService: BackendService) { }

    ngOnInit() {
        this.toggleField = "searchMode";
        this.currentDate = new Date();
        this.currentDate.setDate(this.currentDate.getDate() + 1);
        this.currentDate7 = new Date();
        this.currentDate7.setDate(this.currentDate.getDate() - 7);
        this.dataSource = new MatTableDataSource(this.members);
    }

    toggle(filter?) {
        if (!filter) { filter = "searchMode" }
        else { filter = filter; }
        this.toggleField = filter;
    }

    getData(filters?) {
        this._eCRMFSService.getDocs(filters).subscribe(
            res=> 
            {
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            }
        );   
    }
    getDocsByName(srchtxt){
        if(srchtxt.STD_NM) {
            this._eCRMFSService.getDocsByName(srchtxt.STD_NM).subscribe(
                res=> 
                {
                this.dataSource = new MatTableDataSource(res);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                }
            );
        }
        if(srchtxt.ROLLNO) {
            this._eCRMFSService.getDocsByRollNo(srchtxt.ROLLNO).subscribe(
                res=> 
                {
                this.dataSource = new MatTableDataSource(res);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                }
            );
        }
    }

    setData(data: any) {
        return this._eCRMFSService.setData(data).then(
            (success) => this.savedDataFlag = true
        );
    }

    getDoc(docId) {
        this.myCustID = docId;
        this.myDocData = this._eCRMFSService.getData(docId);
        this.toggle('editMode');
        /** 
        this.myCustID = docId;
        this.myDocData = this._eCRMFSService.getCustomerDoc('calls', docId);
        this.toggle('editMode');
        */
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this._eCRMFSService.deleteData(docId);
            this.toggle('searchMode');
        }
    }
    updateData(docId,formData) {
        if (confirm("Are you sure want to update this record ?")) {
            this._eCRMFSService.updateData(docId,formData).then(
                (success) => this.savedDataFlag = true
            );
        }
    }
    
    //mat table paginator and filter functions
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