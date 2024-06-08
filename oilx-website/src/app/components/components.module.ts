import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { BenefitsComponent } from './benefits/benefits.component';
import { FaqComponent } from './faq/faq.component';
import { OilconomicsComponent } from './oilconomics/oilconomics.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const components = [HomeComponent, FaqComponent, BenefitsComponent,
  RoadmapComponent,
  OilconomicsComponent];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, IonicModule
  ],
  exports: []
})
export class ComponentsModule { }
