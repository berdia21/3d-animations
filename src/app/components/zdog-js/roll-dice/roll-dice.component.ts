import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Anchor, Illustration, Group, Rect, TAU, Ellipse } from 'zdog';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-roll-dice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roll-dice.component.html',
  styleUrls: ['./roll-dice.component.scss'],
})
export class RollDiceComponent {
  @ViewChild('canvas', { static: false })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  illustration!: Illustration;
  dice!: Anchor;
  faces!: Group;
  rotation = {
    x: 0,
    y: 0,
    z: 0,
  };

  rotate = [
    {},
    {
      x: TAU / 4,
    },
    {
      y: TAU / 4,
    },
    {
      y: (TAU * 3) / 4,
    },
    {
      x: (TAU * 3) / 4,
    },
    {
      x: TAU / 2,
    },
  ];

  randomInt = (max = 10) => Math.floor(Math.random() * max);
  randomItem = (arr: any) => arr[this.randomInt(arr.length)];

  ngAfterViewInit() {
    this.makeDice();
  }

  makeDice() {
    // Create an Illustration instance
    this.illustration = new Illustration({
      element: this.canvasRef.nativeElement, // Attach to the canvas element
    });

    // Create a new Anchor and add it to the illustration
    this.dice = new Anchor({
      addTo: this.illustration,
    });

    // Create a new Group to hold the dice faces
    this.faces = new Group({
      addTo: this.dice,
    });

    const face: Rect = new Rect({
      addTo: this.faces,
      stroke: 50,
      width: 50,
      height: 50,
      color: '#189541',
      translate: {
        z: -25,
      },
    });
    // Create the second face
    face.copy({
      rotate: {
        x: TAU / 4,
      },
      translate: {
        y: 25,
      },
    });

    // Create the third face
    face.copy({
      rotate: {
        x: TAU / 4,
      },
      translate: {
        y: -25,
      },
    });

    // Create the fourth face
    face.copy({
      translate: {
        z: 25,
      },
    });

    const one = new Ellipse({
      addTo: this.dice,
      diameter: 15,
      stroke: false,
      fill: true,
      color: 'hsl(0, 0%, 100%)',
      translate: {
        z: 50,
      },
    });

    const two = new Group({
      addTo: this.dice,
      rotate: {
        x: TAU / 4,
      },
      translate: {
        y: 50,
      },
    });

    one.copy({
      addTo: two,
      translate: {
        y: 20,
      },
    });

    one.copy({
      addTo: two,
      translate: {
        y: -20,
      },
    });

    const three = new Group({
      addTo: this.dice,
      rotate: {
        y: TAU / 4,
      },
      translate: {
        x: 50,
      },
    });

    one.copy({
      addTo: three,
      translate: {
        z: 0,
      },
    });

    one.copy({
      addTo: three,
      translate: {
        x: 20,
        y: -20,
        z: 0,
      },
    });

    one.copy({
      addTo: three,
      translate: {
        x: -20,
        y: 20,
        z: 0,
      },
    });

    const four = new Group({
      addTo: this.dice,
      rotate: {
        y: TAU / 4,
      },
      translate: {
        x: -50,
      },
    });

    two.copyGraph({
      addTo: four,
      rotate: {
        x: 0,
      },
      translate: {
        x: 20,
        y: 0,
      },
    });

    two.copyGraph({
      addTo: four,
      rotate: {
        x: 0,
      },
      translate: {
        x: -20,
        y: 0,
      },
    });

    const five = new Group({
      addTo: this.dice,
      rotate: {
        x: TAU / 4,
      },
      translate: {
        y: -50,
      },
    });

    four.copyGraph({
      addTo: five,
      rotate: {
        y: 0,
      },
      translate: {
        x: 0,
      },
    });

    one.copy({
      addTo: five,
      translate: {
        z: 0,
      },
    });

    const six = new Group({
      addTo: this.dice,
      translate: {
        z: -50,
      },
    });

    two.copyGraph({
      addTo: six,
      rotate: {
        x: 0,
        z: TAU / 4,
      },
      translate: {
        x: 0,
        y: 0,
      },
    });

    four.copyGraph({
      addTo: six,
      rotate: {
        y: 0,
      },
      translate: {
        x: 0,
      },
    });

    // show the static illustration
    this.illustration.updateRenderGraph();
  }

  roll(): void {
    this.rollDice(this['randomItem'](this['rotate']));
  }

  rollDice({ x = TAU, y = TAU }) {
    // animate the object toward the input values
    anime({
      targets: this['rotation'],
      // increment the input rotation with a random number of additional rotations
      x: x + TAU * this.randomInt(),
      y: y + TAU * this.randomInt(),
      z: TAU * this.randomInt(),
      duration: 1500,

      // while the object is being updated update the rotation of the dice
      update: () => {
        this['dice'].rotate.x = this['rotation']['x'];
        this['dice'].rotate.y = this['rotation']['y'];
        this['dice'].rotate.z = this['rotation']['z'];
        this['illustration'].updateRenderGraph();
      },
    });
  }
}
