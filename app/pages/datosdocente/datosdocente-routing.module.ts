import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosdocentePage } from './datosdocente.page';

const routes: Routes = [
  {
    path: '',
    component: DatosdocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosdocentePageRoutingModule {}
