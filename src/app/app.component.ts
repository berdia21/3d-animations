import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition('visible => hidden', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  showLoader: boolean = true;
  fadeOutState = 'visible';

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeOutState = 'hidden';
    }, 5500);
    setTimeout(() => {
      this.showLoader = false;
    }, 6000);
  }
}
