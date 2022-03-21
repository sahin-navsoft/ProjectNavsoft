import { AfterViewChecked, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'project5';
  @HostListener('window:scroll', ['$event'])

  ngAfterViewChecked(): void {
      // console.log(window.pageXOffset);
      console.debug("Scroll Event", window.pageYOffset );
  }
}
