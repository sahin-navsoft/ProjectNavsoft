import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signup:any;
inputvalue:any;
  constructor(private router:Router,private _snackBar: MatSnackBar,private service:UserDataService) {
    this.signup=new FormGroup({
      firstname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(13),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email:new FormControl('',[Validators.required,Validators.minLength(5),Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      gender:new FormControl('',[Validators.required])
        })
  }

  ngOnInit(): void {
  }
onClick_signup(){
  if (this.signup.valid) {
    // localStorage.setItem('userData',JSON.stringify(this.signup.value));

    this.service.postRequestSignup(this.signup.value).subscribe((res:any)=>{

      this._snackBar.open('Successfully Signup',"", {

        duration: 1000,
      });
      this.router.navigate(["/login"])
    })


  }
}
onClick_login(){
  this.router.navigate(["/login"])
}
onClick_reset(){



  this.signup.reset();
  this._snackBar.open('Successfully Reset',"", {

    duration: 2000,
  });

}}
