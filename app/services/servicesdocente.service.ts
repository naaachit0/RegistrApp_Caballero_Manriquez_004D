import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface DatosDocente{
  idDocente: number;
  nomDocente: string;
  apDocente: string;
  correoDocente: string;
  modified: number;
}


const ITEMS_KEY = 'my-datosdocente';

@Injectable({
  providedIn: 'root'
})
export class ServicesdocenteService {

  private _storage : Storage;

  constructor(private storage:Storage) { 
    this.init();
   }

   //crea el storage 
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //crear un objeto 
  async addDatosDocente(dato: DatosDocente):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((datos: DatosDocente[])=>{ 
      if(datos){
        datos.push(dato);         //creamos un nuevo obj en el almacen
        return this.storage.set(ITEMS_KEY, datos);
      }
      else
        return this.storage.set(ITEMS_KEY, [dato]);
    })
  }//fin del método


  //leer datos desde el almacen
  async getDatosDocente():Promise<DatosDocente[]>{
    return this.storage.get(ITEMS_KEY);
  }

  //actualizar un objeto del storage
  async updateDatosDocente(dato: DatosDocente):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((datos: DatosDocente[])=>{
      if(!datos || datos.length==0){
        return null;
      }
      let newDato: DatosDocente[] = [];
      for (let i of datos){
        if(dato.idDocente == i.idDocente){
          newDato.push(dato);
        }
        else{
          newDato.push(i);
        }
      }
      this.storage.set(ITEMS_KEY, newDato);
     })
  }

  //método que elimina un objeto del storage
  async deleteDatosDocente(id:number):Promise<DatosDocente>{
    return this.storage.get(ITEMS_KEY).then((datos : DatosDocente[])=>{
      if (!datos || datos.length == 0){
        return null;
      }
      let toKeep: DatosDocente[] = []; 
      for (let i of datos){
        if (i.idDocente !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }



}//fin de la clase

