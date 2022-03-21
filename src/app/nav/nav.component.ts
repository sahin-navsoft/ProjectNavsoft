import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AddEditDialogComponent } from '../add-edit-dialog/add-edit-dialog.component';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  menu_tog: Boolean = false;
  userTitle: any = [];
  type:any
@Input() title="" ;
  constructor(private router: Router, public auth: UserDataService,public dialog: MatDialog) {}
  ngOnInit(): void {
    this.userTitle=localStorage.getItem('username')
  }
  openDialog(type:string){
    const dialogRef = this.dialog.open(DialogComponent,{
      width: '250px',
      data:{
        type:this.title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openDialogAdd(type:string){
    const dialogRef = this.dialog.open(AddEditDialogComponent,{
      width: '500px',
      data:{
        type:type
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
openDialogcart(){
  const dialogRef = this.dialog.open(CartComponent,{
    width: '600px',

  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

  });
}
  login() {
    this.router.navigate(['login']);
    this.menu_tog = false;
  }
  signup() {
    this.router.navigate(['signup']);
    this.menu_tog = false;
  }

  // logout() {
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/login']);
  //   this.menu_tog = false;
  // }

  home() {
    this.router.navigate(['home']);
    this.menu_tog = false;
  }
  card(){
    this.menu_tog = false;
    this.router.navigate([''])
  }
}
