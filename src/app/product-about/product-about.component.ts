import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddEditDialogComponent } from '../add-edit-dialog/add-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-about',
  templateUrl: './product-about.component.html',
  styleUrls: ['./product-about.component.css'],
})
export class ProductAboutComponent implements OnInit {
  productDataById: any = [];
  pData: any;
  pageTitle: string = 'productAbout';
  constructor(
    private service: UserDataService,
    private activatedRouter: ActivatedRoute,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // this.pData = this.activatedRouter.snapshot.params['data'];
    // console.log(this.pData);
    this.activatedRouter.params.subscribe((res: any)=> {
      let productArr = [];
      productArr = this.activatedRouter.snapshot.data['product'];
      console.log(res, productArr);
      let index = productArr.findIndex((x: any)=> String(x.id) === res.id);
      console.log(index);
      this.pData = productArr[index];
      console.log(this.pData);

    })
    // this.pData =
    // console.log(this.activatedRouter.snapshot.data['product']);

  }

  getproduct(id: any) {
    return this.service.get1Request(id).subscribe((res: any) => {
      this.productDataById = res;
    });
  }
  add_to_cart() {
    return this.service.postCart(this.pData).subscribe((res: any) => {
      console.log(res);
      this._snackBar.open('Product is Successfully Added', 'Ok', {
        duration: 2000,
      });
      const dialogRef = this.dialog.open(CartComponent, {
        width: '550px',
      });
      dialogRef.afterClosed().subscribe((result) => {});
    });
  }
  buyNow() {
    var buy = {
      id: this.productDataById.id,
      title: this.productDataById.title,
      price: this.productDataById.price,
      image: this.productDataById.image,
    };
    this.service.postBuyProducts(buy).subscribe((res: any) => {
      this._snackBar.open('Product is Successfully buy', 'Ok', {
        duration: 2000,
      });
    });
  }

}
