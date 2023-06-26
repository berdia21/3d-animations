import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ellipse, Group, Illustration } from 'zdog';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-abstraction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abstraction.component.html',
  styleUrls: ['./abstraction.component.scss'],
})
export class AbstractionComponent {
  @ViewChild('canvas', { static: false })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('parentCanvas', { static: false })
  parentCanvasRef!: ElementRef<HTMLCanvasElement>;

  CIRCLES = 9;
  CIRCLE_SIZE = window.innerWidth < 900 ? 5 : 9;
  SPREAD = window.innerWidth < 900 ? 200 : 300;

  groups: Group[] = [];
  start = 0;
  progress = 0;
  animating = false;
  SIN = Math.sin;
  FLOOR = Math.floor;
  hue!: number;
  MAP = function (
    x: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number
  ): number {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  illo!: Illustration;

  isDragging = false;
  initialX = 0;
  initialY = 0;
  offsetX = 0;
  offsetY = 0;

  startDragging(event: any) {
    this.isDragging = true;
    this.initialX = event.clientX;
    this.initialY = event.clientY;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  stopDragging() {
    this.isDragging = false;
    this.returnToCenter();
  }

  returnToCenter() {
    anime({
      targets: '.rotate-div',
      translateX: '0px',
      translateY: '0px',
      rotateZ: '0',
      duration: 500,
      easing: 'easeOutElastic',
    });
  }

  moveFromCenter(offsetX: number, offsetY: number) {
    anime({
      targets: '.rotate-div',
      translateX: `${offsetX}px`,
      translateY: `${offsetY}px`,
      rotateZ: `${offsetY / 2}`,
      duration: 0,
      easing: 'linear',
    });
  }

  onDrag(event: any) {
    if (this.isDragging) {
      this.offsetX = event.clientX - this.initialX;
      this.offsetY = event.clientY - this.initialY;
      this.moveFromCenter(this.offsetX, this.offsetY);
    }
  }

  mainFunction() {
    const options = {
      element: this.canvasRef.nativeElement,
      resize: true,
    };
    this.illo = new Illustration(options);
    const hueOffset = 70;
    const circleRange = this.CIRCLES - 1;
    const spreadHalf = this.SPREAD / 2;

    const circleIndices = Array.from({ length: this.CIRCLES }, (_, i) => i);
    const translateMap = (value: number) =>
      this.MAP(value, 0, circleRange, -spreadHalf, spreadHalf);

    for (let z = 0; z < this.CIRCLES * 2; z++) {
      const zz = this.MAP(z, 0, this.CIRCLES * 2, -spreadHalf, spreadHalf);
      const myGroup = new Group({
        addTo: this.illo,
        translate: { z: zz },
      });
      const hue = z * 9 + hueOffset;

      circleIndices.forEach((x) => {
        const xx = translateMap(x);
        const xp = this.FLOOR(this.MAP(x, 0, circleRange, 25, 90)) + '%';

        circleIndices.forEach((y) => {
          const yy = translateMap(y);
          const yp = this.FLOOR(this.MAP(y, 0, circleRange, 25, 90)) + '%';

          const myEllipse = {
            addTo: myGroup,
            diameter: this.CIRCLE_SIZE / 2,
            stroke: this.CIRCLE_SIZE * 1.5,
            color: `hsla(${hue + x * 7 + y}, ${xp}, ${yp}, .5)`,
            translate: { x: xx, y: yy },
          };

          new Ellipse(myEllipse);
        });
      });

      this.groups.push(myGroup);
    }
  }
  render = () => {
    if (!this.animating) return;

    const t = Date.now() - this.start;
    const { illo, groups } = this;
    const rotateScale = 1;

    const rotationX = this.MAP(this.SIN(t / 1000), -1, 1, -1, 1) * rotateScale;
    const rotationY = this.MAP(this.SIN(t / 2000), -1, 1, -2, 2) * rotateScale;
    const rotationZ = this.MAP(this.SIN(t / 1000), -1, 1, -2, 2) * rotateScale;

    illo.rotate.x = rotationX;
    illo.rotate.y = rotationY;
    illo.rotate.z = rotationZ;

    groups.forEach((myGroup, i) => {
      myGroup.rotate.z = 0.0005 * (t / 25) * (i / 2);
    });

    illo.updateRenderGraph();
    this.progress = t;

    requestAnimationFrame(this.render);
  };

  playAnimation = () => {
    if (this.animating) return;
    this.start = Date.now() - this.progress;
    this.animating = true;
    this.render();
  };

  ngAfterViewInit() {
    this.mainFunction();
  }
}
