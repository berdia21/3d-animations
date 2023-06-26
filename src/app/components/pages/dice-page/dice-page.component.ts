import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FogComponent } from '../../vantas/fog/fog.component';
import { RollDiceComponent } from '../../zdog-js/roll-dice/roll-dice.component';
import { AbstractionComponent } from '../../zdog-js/abstraction/abstraction.component';

@Component({
  selector: 'app-dice-page',
  standalone: true,
  imports: [
    CommonModule,
    FogComponent,
    RollDiceComponent,
    AbstractionComponent,
  ],
  templateUrl: './dice-page.component.html',
  styleUrls: ['./dice-page.component.scss'],
})
export class DicePageComponent {}
