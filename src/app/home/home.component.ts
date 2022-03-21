import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AddEditDialogComponent } from '../add-edit-dialog/add-edit-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;
  pageTitle:string='home'
  displayedColumns: string[] = [
    // 'id',
    'name',
    'email',
    'phone',
    'city',
    'country',
    'zip',
    'date',
    'action',
  ];
  spin: boolean = false;
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(public userData: UserDataService, private router: Router,public dialog: MatDialog) {
    this.getData();
  }

  ngOnInit(): void {
    this.getData();
    let user: any = localStorage.getItem('username');

  }
  getData() {
    this.spin = true;
    this.userData.getRequest().subscribe((resData: any) => {
      this.dataSource.data = resData.data;


      // localStorage.setItem('data', JSON.stringify(resData.data));
      this.spin = false;
      // let val: any = localStorage.getItem('data');

      // this.dataSource.data = JSON.parse(val);
    });
  }
  openDialog(type: string, id: any){
    const dialogRef = this.dialog.open(DialogComponent,{
      width: '250px',
      data: {
        type: type,
        id: id
      }
    });
  }
  editDialog(type: string, id: any){
    const dialogRef = this.dialog.open(AddEditDialogComponent,{
      width: '550px',
      data: {
        type: type,
        id: id
      }
    });
  }
}
