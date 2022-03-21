import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  type: string;
  id: any;
  spin:boolean=false

  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: UserDataService
  ) {
    this.type = data.type;
    this.id = data.id;
  }

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  logout() {
    {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.dialogRef.close();
      this.router.navigate(['login'])

    }


  }
  dashboardLogout(){
    if(this.type=='dashboardHome'){
      localStorage.removeItem('username')
      this.router.navigate(['/dashboard']);
      this.dialogRef.close();
    }

  }

  delete_user(id: any) {
    this.spin=true
    this.service.deleteRequest(id).subscribe((res: any) => {
      this.dialogRef.close();
        this._snackBar.open('Successfully Updated', 'Ok', {
          duration: 2000,
        });
        this.spin=false
    });
  }
}
