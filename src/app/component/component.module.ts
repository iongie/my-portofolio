import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { MatButtonModule } from '@angular/material/button';
import { HotelComponent } from './hotel/hotel.component';
import { PointOfSalesComponent } from './point-of-sales/point-of-sales.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { MyCvComponent } from './my-cv/my-cv.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ResumeComponent } from './resume/resume.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    ProfileComponent,
    PortofolioComponent,
    HotelComponent,
    PointOfSalesComponent,
    EventRegistrationComponent,
    MyCvComponent,
    ResumeComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatChipsModule
  ],
  exports: [
    ProfileComponent,
    PortofolioComponent,
    HotelComponent,
    PointOfSalesComponent,
    EventRegistrationComponent,
    MyCvComponent,
  ]
})
export class ComponentModule { }
