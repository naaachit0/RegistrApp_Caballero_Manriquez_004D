import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feriados2022Page } from './feriados2022.page';

const routes: Routes = [
  {
    path: '',
    component: Feriados2022Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feriados2022PageRoutingModule {}
