import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentModule } from '../component/component.module';
import { Routes, RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    ComponentModule,
    MatGridListModule
  ]
})
export class HomeModule { }
