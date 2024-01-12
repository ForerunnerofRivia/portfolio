import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParallaxDirective } from './parallax.directive';
import { PresentationContainerComponent } from './presentation-container/presentation-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParallaxDirective,
    PresentationContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
