import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioDocentePageRoutingModule } from './inicio-docente-routing.module';

import { InicioDocentePage } from './inicio-docente.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InicioDocentePageRoutingModule
  ],
  declarations: [InicioDocentePage]
})
export class InicioDocentePageModule {}
