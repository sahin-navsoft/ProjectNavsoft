import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardServiceService } from '../dashboard-service.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:any
  adminLogin:any
pageTitle:string=''
  constructor(private adminService:DashboardServiceService,private router:Router,private service:UserDataService) {
    this.adminLogin= new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern(''),Validators.minLength(8),Validators.maxLength(13),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    })
   }
   ngOnInit(): void {
     this.getAdmin()
     this.dashboardTitle()
    }
    dashboardTitle(){
      if(this.service.isLogin()){
        this.pageTitle=""
      }else{
        this.pageTitle="dashboard"
      }
    }
getAdmin(){
  this.adminService.getAdmin().subscribe((res:any)=>{
  this.data=res;
  console.log(this.data)
  })
}
onClickDashboard(){
  let index = this.data.findIndex(
    (x:any) => x.email === this.adminLogin.controls.email.value
  );
  if (index > -1) {
    if (
      this.data[index].password === this.adminLogin.controls.password.value
    ) {
      localStorage.setItem('username', this.data[index].name);
      this.adminService.snackBar('User Login Successfully', 'Success');
      this.router.navigate(['dashboardHome']);
    } else {
      this.adminService.snackBar('Invalid Password', 'Error');
    }
  } else {
    console.log('nei');
    this.adminService.snackBar('Invalid Username !!!', 'Error');
  }
}
}

