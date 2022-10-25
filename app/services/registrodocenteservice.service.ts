import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Docente{
  nomDocente: string;
  correoDocente: string;
  passDocente: string;
  repassDocente:string;
}

const USERS_KEY ='my-docente';




@Injectable({
  providedIn: 'root'
})
export class RegistrodocenteserviceService {

  private _storage : Storage;
  
  constructor(private storage: Storage) { 
    this.init();
  }

    //creamos el almacen de key,value
    async init(){
      const storage = await this.storage.create();
      this._storage = storage;  
    }
  
    //crear un nuevo Docente en el storage
    async addDocente(dato: Docente):Promise<any>{
      return this.storage.get(USERS_KEY).then((datos: Docente[])=>{
        if (datos){
            datos.push(dato);
            return this.storage.set(USERS_KEY, datos);
        }
        else{
          return this.storage.set(USERS_KEY, [dato]);
        }
       })
    }//fin del método add
  
    //obtener los Docentes del storage
    async getDocentes(){
      return this.storage.get(USERS_KEY);
    }
  
  
}
