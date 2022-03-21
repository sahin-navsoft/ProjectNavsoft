import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';


@Component({
  selector: 'app-add-edit-dialog',
  templateUrl: './add-edit-dialog.component.html',
  styleUrls: ['./add-edit-dialog.component.css']
})
export class AddEditDialogComponent implements OnInit {
  addEditForm:any;
  type: string;
  spin:boolean=false;

  constructor(   private service: UserDataService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddEditDialogComponent>)
    {
      this.type = data.type
      this.addEditForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        mobile: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(13),
          Validators.pattern('^([0-9()/+ -]*)$'),
        ]),
        country: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required]),

      });
    }

  ngOnInit(): void {
    this.patchData()
  }


patchData(){
  if (this.type=='edit') {
    this.spin=true
    this.service.getRequest(this.data.id).subscribe((resData: any) => {

      this.addEditForm.patchValue({
        name: resData.name,
        email: resData.email,
        mobile: resData.mobile,
        country: resData.country,
        city: resData.city,
        date: resData.date
      });
      this.spin=false
    });

  }
}

  onSubmit() {

    console.log(this.addEditForm.value);
    this.spin=true
    this.service
      .putRequest(
        this.data.id,
        this.addEditForm.value
      )
      .subscribe((res: any) => {

        this.dialogRef.close();
        this._snackBar.open('Successfully Updated', 'Ok', {
          duration: 2000,
        });
        this.spin=false
      });

  }


  onAddSubmit(){
    this.spin=true
    this.service
    .postRequest(
      this.addEditForm.value
    )
    .subscribe((res: any) => {


      this.dialogRef.close();
      this._snackBar.open('Successfully Added', 'Ok', {
        duration: 2000,
      });
      this.spin=false
    });

  }
  onCancel(){
    this.dialogRef.close();
  }
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };
}
