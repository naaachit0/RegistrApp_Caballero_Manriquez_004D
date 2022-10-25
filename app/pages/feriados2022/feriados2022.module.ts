import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Feriados2022PageRoutingModule } from './feriados2022-routing.module';

import { Feriados2022Page } from './feriados2022.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Feriados2022PageRoutingModule
  ],
  declarations: [Feriados2022Page]
})
export class Feriados2022PageModule {}
