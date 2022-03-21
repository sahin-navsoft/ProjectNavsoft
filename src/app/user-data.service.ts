import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  hide: boolean = true;
  userTitle: any = [];
  pageTitle:string='';
  productId:any;
  constructor(private http: HttpClient,private _snackBar:MatSnackBar) {}
  isLogin() {
    if (localStorage.getItem('token') !== null) {
      return true;
    }
      return 0;

  }
  getRequest(id:string=''){
    if (id) {
      return this.http.get(
        'https://6131c3d87287b70017e6421f.mockapi.io/api/masum/user/'+id,
      );
    } else {
      return this.http.get(
        'https://6131c3d87287b70017e6421f.mockapi.io/api/masum/user'
      );
    }

  }
  putRequest(id:any,value:any) {
    return this.http.put(
      'https://6131c3d87287b70017e6421f.mockapi.io/api/masum/user/'+id,value
    );
  }

  postRequest(data:any){
    return this.http.post(
      'https://6131c3d87287b70017e6421f.mockapi.io/api/masum/user',data
    );
  }

  get1Request(id:string='') {

    if (id) {
      return this.http.get(
        'https://6215d127c9c6ebd3ce3275e5.mockapi.io/ProductsData/'+id,
      );
    }else{
      return this.http.get(
        'https://6215d127c9c6ebd3ce3275e5.mockapi.io/ProductsData'
      );}

  }

  deleteRequest(id:any) {
    return this.http.delete(
      'https://6131c3d87287b70017e6421f.mockapi.io/api/masum/user/'+id
    );
  }

  postRequestSignup(data:any){
    return this.http.post(
      'https://6215d127c9c6ebd3ce3275e5.mockapi.io/data/',data
    );
  }
  getRequestData(){
    return this.http.get('https://6215d127c9c6ebd3ce3275e5.mockapi.io/data')
  }


  getCart(id:string){
    if(id){
      return this.http.get('https://622ef65d3ff58f023c11a74a.mockapi.io/cart'+id)
    }else{
      return this.http.get('https://622ef65d3ff58f023c11a74a.mockapi.io/cart')
    }

  }
  postCart(data:any){
    return this.http.post('https://622ef65d3ff58f023c11a74a.mockapi.io/cart',data)
  }
  deleteCart(id:number){
    return this.http.delete('https://622ef65d3ff58f023c11a74a.mockapi.io/cart/'+id)
  }
  snackBar(msg:string,action='success',timeout=3000){
    this._snackBar.open(msg,action,{duration:timeout});
  }



  // buy-product//

  postBuyProducts(data:any){
    return this.http.post('https://6215d127c9c6ebd3ce3275e5.mockapi.io/buy-product',data)
  }
}
