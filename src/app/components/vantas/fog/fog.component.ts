import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import FOG from 'vanta/dist/vanta.fog.min';

@Component({
  selector: 'app-fog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fog.component.html',
  styleUrls: ['./fog.component.scss'],
})
export class FogComponent {
  ngAfterViewInit(): void {
    FOG({
      el: '#fogWrapper',
      mouseControls: false,
      touchControls: false,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x227047,
      midtoneColor: 0x113466,
      lowlightColor: 0x62206,
      baseColor: 0x251515,
      blurFactor: 0.3,
      speed: 0.4,
      zoom: 0.6,
    });
  }
}
