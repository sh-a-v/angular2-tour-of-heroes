import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HeroService } from './shared';
import { DashboardComponent } from './dashboard';
import { HeroesComponent } from './heroes';
import { HeroDetailComponent } from './heroes/hero-detail';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
