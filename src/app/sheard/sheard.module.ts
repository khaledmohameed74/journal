import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SheardRoutingModule } from './sheard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './navbar/topbar/topbar.component';
import { MidbarComponent } from './navbar/midbar/midbar.component';
import { DownbarComponent } from './navbar/downbar/downbar.component';
import { TopfooterComponent } from './footer/topfooter/topfooter.component';
import { MidfooterComponent } from './footer/midfooter/midfooter.component';
import { DownfooterComponent } from './footer/downfooter/downfooter.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TopbarComponent,
    MidbarComponent,
    DownbarComponent,
    TopfooterComponent,
    MidfooterComponent,
    DownfooterComponent
  ],
  imports: [
    CommonModule,
    SheardRoutingModule,

  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    TopbarComponent,
    MidbarComponent,
    DownbarComponent
  ]
})
export class SheardModule { }
