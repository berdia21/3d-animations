import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VrSceneComponent } from './components/vr-scene/vr-scene.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loaders/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    VrSceneComponent,
    HeaderComponent,
    LoaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
