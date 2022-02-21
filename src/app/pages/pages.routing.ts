import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grap1Component } from './grap1/grap1.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: MainComponent,
        children: [
          { path: '', component: DashboardComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'graph1', component: Grap1Component },
        ],
      },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PagesRoutingModule {}