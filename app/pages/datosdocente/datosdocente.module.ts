import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosdocentePageRoutingModule } from './datosdocente-routing.module';

import { DatosdocentePage } from './datosdocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosdocentePageRoutingModule
  ],
  declarations: [DatosdocentePage]
})
export class DatosdocentePageModule {}
