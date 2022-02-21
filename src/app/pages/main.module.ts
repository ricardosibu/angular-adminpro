import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grap1Component } from './grap1/grap1.component';
import { ProgressComponent } from './progress/progress.component';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [
    DashboardComponent,
    Grap1Component,
    ProgressComponent,
    MainComponent
  ],
  exports: [
    DashboardComponent,
    Grap1Component,
    ProgressComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class MainModule { }
