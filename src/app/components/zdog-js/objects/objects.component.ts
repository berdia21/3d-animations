import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Illustration, Box, Shape, Ellipse, Rect, TAU, Dragger } from 'zdog';

@Component({
  selector: 'app-objects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ObjectsComponent {
  @ViewChild('canvas', { static: false })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  private illo!: Illustration;
  box!: Box;

  ngAfterViewInit(): void {
    this.createIllo = this.createIllo.bind(this);
    this.animate = this.animate.bind(this);
    this.createIllo();
    this.animate();
  }

  createIllo(): void {
    this.illo = new Illustration({
      element: '.canvas',
      dragRotate: true,
      zoom: 1.2,
    });

    this.box = new Box({
      addTo: this.illo,
      width: 120,
      height: 120,
      depth: 120,
      stroke: false,
      color: '#922',
      leftFace: '#189541',
      rightFace: '#E62',
      topFace: '#ED0',
      bottomFace: '#636',
    });

    this.illo.updateRenderGraph();
  }

  animate() {
    this.illo.updateRenderGraph();
    // animate next frame
    this.box.rotate.x += 0.005;
    this.box.rotate.y -= 0.005;
    requestAnimationFrame(this.animate);
  }
}
