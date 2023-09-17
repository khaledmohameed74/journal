import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { FirstsectionComponent } from './home/firstsection/firstsection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SecondsectionComponent } from './home/secondsection/secondsection.component';
import { ThirdsectionComponent } from './home/thirdsection/thirdsection.component';
import { FourthsectionComponent } from './home/fourthsection/fourthsection.component';
import { FifthsectionComponent } from './home/fifthsection/fifthsection.component';
import { SixthsectionComponent } from './home/sixthsection/sixthsection.component';
import { SeventhsectionComponent } from './home/seventhsection/seventhsection.component';

@NgModule({
  declarations: [
    HomeComponent,
    FirstsectionComponent,
    SecondsectionComponent,
    ThirdsectionComponent,
    FourthsectionComponent,
    FifthsectionComponent,
    SixthsectionComponent,
    SeventhsectionComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  exports: [
    HomeComponent,
    FirstsectionComponent,
  ]
})
export class FeaturesModule { }
