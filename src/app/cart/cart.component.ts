import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartData: any;
  divShow: boolean = true;
  spin: boolean = false;
  DeliveryCharges:number=40
  totalPrice: number = 0;
  total: any;
  constructor(
    public dialogRef: MatDialogRef<CartComponent>,
    private service: UserDataService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cart();
    // console.log('this is cart');
    // this.cal();
  }
  cart() {
    this.spin = true;
    return this.service.getCart('').subscribe((res: any) => {
      console.log(res);
      this.cartData = res;
    this.cal();

      if (res.length > 0) {
        this.divShow = true;
      } else {
        this.divShow = false;
      }
        this.spin = false;
    });
  }
  deleteCartItem(id: any) {
    this.spin = true;
    return this.service.deleteCart(id).subscribe((res: any) => {
      this.spin = false;

      this.cart();
      this._snackBar.open('Product is Successfully deleted', 'Ok', {
        duration: 2000,
      });
      if (this.cartData) {
      }
    });
  }
  buyNow(){
    var buy={
      id:this.cartData.id,
      title:this.cartData.title,
      price:this.cartData.price
    }
  this.service.postBuyProducts(buy).subscribe((res:any)=>{
    this._snackBar.open('Product is Successfully buy', 'Ok', {
      duration: 2000,
    });
  })
  }
  cal(){
    // this.cartData.forEach((element, index) => {

    // });
    // this.cartData.forEach((element: any, index: any) => {
    //   console.log(element, index);
    //   let sum = 0;
    //   sum =+ element.price;
    //   console.log(element.price, sum);

    // });
   this.totalPrice = this.cartData.reduce((total: any, element: any)=> {
      return total + element.price
    }, 0);

    console.log(this.totalPrice);
    this.total=this.totalPrice+40

  }
}
