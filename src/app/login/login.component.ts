import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any;
  user1: any;
  img: any;
  userAuth: any[] = [];
  constructor(private router: Router, private service: UserDataService) {
    this.login = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ]),
    });
  }

  ngOnInit(): void {
    if(this.service.isLogin()){
this.router.navigate([''])
    }
    this.getUser();
  }
  getUser() {
    return this.service.getRequestData().subscribe((res: any) => {
      this.userAuth = res;
    });
  }
  onClick_login() {
    if (this.login.valid) {
      localStorage.setItem('token', JSON.stringify(this.login.value));
      console.log(this.userAuth, this.login.controls.email.value);
      let index = this.userAuth.findIndex(
        (x) => x.email === this.login.controls.email.value
      );
      if (index > -1) {
        if (
          this.userAuth[index].password === this.login.controls.password.value
        ) {
          localStorage.setItem('username', this.userAuth[index].firstname);
          this.service.snackBar('User Login Successfully', 'Success');
          this.router.navigate(['']);
        } else {
          this.service.snackBar('Invalid Password', 'Error');
        }
      } else {
        console.log('nei');
        this.service.snackBar('Invalid Username !!!', 'Error');
      }
    }
    return;
  }
  onClick_signup() {
    this.router.navigate(['signup']);
  }
}
