import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDataService } from './user-data.service';
@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http:HttpClient,private _snackBar:MatSnackBar,private service:UserDataService) { }
getAdmin(){
  return this.http.get(
    'https://6215d127c9c6ebd3ce3275e5.mockapi.io/products'
  );
}
getBuyProducts(){
  return this.http.get('https://6215d127c9c6ebd3ce3275e5.mockapi.io/buy-product')
}
snackBar(msg:string,action='success',timeout=3000){
  this._snackBar.open(msg,action,{duration:timeout});
}
}
