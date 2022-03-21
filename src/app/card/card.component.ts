import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
  pData: any = [];
  tog: boolean = true;
  spin: boolean = false;
  pageTitle: string = 'card';
  productData: any;
  constructor(private cardData: UserDataService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
    // get the user name from local storage//

    let user: any = localStorage.getItem('username');
  }

  // get data from api for card //

  getData() {
    this.spin = true;
    this.cardData.get1Request().subscribe((resData: any) => {
      this.spin = false;
      console.log(resData);
      this.pData = resData;
      console.log(this.pData);

      // this.productData = {
      //   id: this.pData[0].id,
      //   title: this.pData[0].title,
      //   image: this.pData[0].image,
      //   description: this.pData[0].description,
      // };
    });
  }

  onProductDetails(id: any) {
    this.router.navigate(['product-about',id]);
  }

  // productData={
  //  id:this.pData[0].id,
  //  title:this.pData[0].title,
  //  image:this.pData[0].image,
  //  description:this.pData[0].description
  // }
}
