import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { menuController } from '@ionic/core';
import { Feriados } from '../../interface/interfaces';
import { FeriadosService } from '../../services/feriados.service';

@Component({
  selector: 'app-feriados2022',
  templateUrl: './feriados2022.page.html',
  styleUrls: ['./feriados2022.page.scss'],
})
export class Feriados2022Page implements OnInit {

  feriados: Feriados[] = [];

  constructor(private feriadosService: FeriadosService, private menuController: MenuController) {

   }

  ngOnInit() {
    this.feriadosService.getTopHeadlines().subscribe(resp => {
      console.log('feriados', resp);
    })
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }



}
