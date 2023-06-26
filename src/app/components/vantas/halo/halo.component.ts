import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import HALO from 'vanta/dist/vanta.halo.min';
import { ObjectsComponent } from '../../zdog-js/objects/objects.component';

@Component({
  selector: 'app-halo',
  standalone: true,
  imports: [CommonModule, ObjectsComponent],
  templateUrl: './halo.component.html',
  styleUrls: ['./halo.component.scss'],
})
export class HaloComponent {
  ngAfterViewInit(): void {
    HALO({
      el: '#haloWrapper', // element selector string or DOM object reference
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      amplitudeFactor: 3.0,
      baseColor: '#189541',
      backgroundColor: '#1c222a',
      size: 1,
    });
  }
}
