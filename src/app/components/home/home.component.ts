import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeBannerComponent } from '../anime-js/welcome-banner/welcome-banner.component';
import { RollDiceComponent } from '../zdog-js/roll-dice/roll-dice.component';
import { PlanetComponent } from '../zdog-js/planet/planet.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    WelcomeBannerComponent,
    RollDiceComponent,
    PlanetComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {}
