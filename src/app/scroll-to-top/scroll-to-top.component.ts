import { AfterContentChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css'],
})
export class ScrollToTopComponent implements OnInit {
  constructor() {}
  btn: boolean = true;
  screen: any;
  windowScrolled: boolean = false;

  ngOnInit(): void {}

  // ngAfterContentChecked() {
    // console.log(window.pageXOffset);
  // }

  scrollToTop() {
    window.scrollTo(0, 0);
    console.log(window.pageXOffset);

  }

  // onWindowScroll() {
  //   if (window.pageXOffset || document.documentElement.scrollTo || document.body.scrollTop > 20) {
  //     this.windowScrolled = true;
  //   } else if (
  //     (this.scrollToTop() && window.pageYOffset) ||
  //     document.documentElement.scrollTo ||
  //     document.body.scrollTop < 10
  //   ) {
  //     this.windowScrolled = false;
  //   }
  // }

  // scrollToTop() {
  //   // scroll to the top of the body
  //   return window.document.body.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //     inline: 'start',
  //   });
  // }
}
