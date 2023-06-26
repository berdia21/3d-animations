import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('loader') loaderElement!: ElementRef;
  showLoader: boolean = true;

  ngAfterViewInit() {
    setTimeout(() => {
      this.showLoader = false;
    }, 6000);
  }
}
