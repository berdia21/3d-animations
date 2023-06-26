import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import HALO from 'vanta/dist/vanta.halo.min';

@Component({
  selector: 'app-vanta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vanta.component.html',
  styleUrls: ['./vanta.component.scss'],
})
export class VantaComponent {
  ngAfterViewInit(): void {
    HALO({
      el: '#vantaWrapper', // element selector string or DOM object reference
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      amplitudeFactor: 3.0,
      baseColor: '#189541',
      backgroundColor: '#1c222a',
      size: 0.7,
    });
  }
}
