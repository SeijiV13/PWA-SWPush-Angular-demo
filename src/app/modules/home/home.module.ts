
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { WhyUsSectionComponent } from './components/why-us-section/why-us-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeContainerComponent } from './pages/home-container/home-container.component';
import { HomeRoutingRoutes } from './home-routing.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesSectionComponent } from './components/services-section/services-section.component';



@NgModule({
  declarations: [
    HomeContainerComponent,
    HeroSectionComponent,
    ServicesSectionComponent,
    WhyUsSectionComponent,
    FeaturesSectionComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    HomeRoutingRoutes,
    NgbModule
  ]
})
export class HomeModule { }
