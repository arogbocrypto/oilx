import { HomeComponent } from './components/home/home.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { OilconomicsComponent } from './components/oilconomics/oilconomics.component';
import { FaqComponent } from './components/faq/faq.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
const customComponents = [HomeComponent, BenefitsComponent, FaqComponent, OilconomicsComponent, RoadmapComponent];

@NgModule({
  declarations: [AppComponent, ...customComponents],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [...customComponents],
})
export class AppModule { }
