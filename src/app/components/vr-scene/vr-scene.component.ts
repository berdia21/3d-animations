import { trigger, transition, animate, style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import * as AFRAME from 'aframe';
import { LoaderTwoComponent } from '../loaders/loader-two/loader-two.component';

@Component({
  selector: 'app-vr-scene',
  standalone: true,
  imports: [CommonModule, LoaderTwoComponent],
  templateUrl: './vr-scene.component.html',
  styleUrls: ['./vr-scene.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('fadeOut', [
      transition('visible => hidden', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class VrSceneComponent {
  showLoader: boolean = true;
  fadeOutState = 'visible';

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeOutState = 'hidden';
    }, 4500);
    setTimeout(() => {
      this.showLoader = false;
    }, 5000);
  }

  ngAfterViewInit() {
    AFRAME.registerComponent('cursor-listener', {
      init: function () {
        let el = this.el;
        el.addEventListener('click', function () {
          el.getAttribute('animation-mixer')
            ? el.removeAttribute('animation-mixer')
            : el.setAttribute(
                'animation-mixer',
                'clip: Cylinder.002|Cylinder.003Action.001'
              );
        });
      },
    });
  }
}
