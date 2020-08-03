import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { MatButtonModule } from '@angular/material/button';
import { HotelComponent } from './hotel/hotel.component';



@NgModule({
  declarations: [
    ProfileComponent,
    PortofolioComponent,
    HotelComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [
    ProfileComponent,
    PortofolioComponent,
    HotelComponent
  ]
})
export class ComponentModule { }
