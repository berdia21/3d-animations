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
    // Bind the methods to the component instance
    this.createIllo = this.createIllo.bind(this);
    this.animate = this.animate.bind(this);
    // Call the initialization methods
    this.createIllo();
    this.animate();
  }

  createIllo(): void {
    // Create a new Illustration instance
    this.illo = new Illustration({
      element: '.canvas', // Specify the element to attach the illustration
      dragRotate: true, // Enable dragging to rotate the illustration
      zoom: 1.2, // Set the initial zoom level of the illustration
    });

    // Create a new Box object and add it to the illustration
    this.box = new Box({
      addTo: this.illo,
      width: 120,
      height: 120,
      depth: 120,
      stroke: false, // Disable stroke (outline)
      color: '#922',
      leftFace: '#189541',
      rightFace: '#E62',
      topFace: '#ED0',
      bottomFace: '#636',
    });

    this.illo.updateRenderGraph(); // Update the render graph of the illustration
  }

  animate() {
    this.illo.updateRenderGraph(); // Update the render graph before animating the frame
    // Animate the rotation of the box for the next frame
    this.box.rotate.x += 0.005;
    this.box.rotate.y -= 0.005;
    requestAnimationFrame(this.animate); // Request the next animation frame
  }
}
