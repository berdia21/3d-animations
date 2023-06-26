import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'dice',
    loadComponent: () =>
      import('./components/pages/dice-page/dice-page.component').then(
        (m) => m.DicePageComponent
      ),
  },
  {
    path: 'vr-scene',
    loadComponent: () =>
      import('./components/pages/vr-scene/vr-scene.component').then(
        (m) => m.VrSceneComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
