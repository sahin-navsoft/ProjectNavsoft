import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import{CustomValidators} from '../custom-validators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-password-validation',
  templateUrl: './custom-password-validation.component.html',
  styleUrls: ['./custom-password-validation.component.css']
})
export class CustomPasswordValidationComponent implements OnInit {
  login: any;
  user1: any;
  constructor(private router:Router,private _snackBar: MatSnackBar) {


    this.login=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.email]),
      password:new FormControl(null,Validators.compose([
        Validators.required,
        // check whether the entered password has a number
        CustomValidators.patternValidator(/\d/, {
          hasNumber: true
        }),
        // check whether the entered password has upper case letter
        CustomValidators.patternValidator(/[A-Z]/, {
          hasCapitalCase: true
        }),
        // check whether the entered password has a lower case letter
        CustomValidators.patternValidator(/[a-z]/, {
          hasSmallCase: true
        }),
        // check whether the entered password has a special character
        CustomValidators.patternValidator(
          /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
          {
            hasSpecialCharacters: true
          }
        ),
        Validators.minLength(8)
      ])),
        })

  }

  ngOnInit(): void {
  }

  onClick_login(){

  }
}
