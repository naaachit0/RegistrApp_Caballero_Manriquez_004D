import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicesdocenteService, DatosDocente } from '../../services/servicesdocente.service';
import { Platform, ToastController, IonList } from '@ionic/angular';


@Component({
  selector: 'app-datosdocente',
  templateUrl: './datosdocente.page.html',
  styleUrls: ['./datosdocente.page.scss'],
})
export class DatosdocentePage implements OnInit {
  
  datos : DatosDocente[] = [];
  newDato: DatosDocente = <DatosDocente>{};
  @ViewChild('myList')myList :IonList; 

  constructor(private menuController: MenuController,
              private serviceDatosDocente: ServicesdocenteService,
              private plt: Platform,
              private toastController: ToastController) {
                this.plt.ready().then(()=>{
                  this.loadDatos();
                })
               }

  ngOnInit() {
  }

  mostrarMenuDocente(){
    this.menuController.open('first');
  }

  //invocamos al método getDatos() del servicio
  loadDatos(){
    this.serviceDatosDocente.getDatosDocente().then(datos=>{ 
      this.datos = datos;
    })
  }

  //creamos un objeto del tipo interface Datos, invocamos al método del servicio
  addDatosDocente(){
    this.newDato.modified=Date.now();
    this.newDato.idDocente=Date.now();
    this.serviceDatosDocente.addDatosDocente(this.newDato).then(dato => { 
      this.newDato = <DatosDocente>{};
      this.showToast('Datos Agregados!');
      this.loadDatos();
    })
  }

  async showToast(msg){
    const toast = await this.toastController.create({ 
      message : msg,
      duration: 2000
    })
    toast.present();
  }

   //update
   updateDatosDocente(dato: DatosDocente ){
    dato.nomDocente = `UPDATED: ${dato.nomDocente}`;
    dato.modified = Date.now();
    this.serviceDatosDocente.updateDatosDocente(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  } 

  //delete
  deleteDatosDocente(dato: DatosDocente){
    this.serviceDatosDocente.deleteDatosDocente(dato.idDocente).then(item=>{
      this.showToast('Elemento eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }
























}
