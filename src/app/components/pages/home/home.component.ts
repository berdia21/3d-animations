import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeBannerComponent } from '../../anime-js/welcome-banner/welcome-banner.component';
import { HaloComponent } from '../../vantas/halo/halo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, WelcomeBannerComponent, HaloComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {}
