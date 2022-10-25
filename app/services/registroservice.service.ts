import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Alumno{
  nomAlumno: string;
  correoAlumno: string;
  passAlumno: string;
  repassAlumno:string;
}

const USERS_KEY ='my-alumnos';


@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {

  private _storage : Storage;
  
  constructor(private storage: Storage) { 
    this.init();
  }


  //creamos el almacen de key,value
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;  
  }

  //crear un nuevo Alumno en el storage
  async addAlumno(dato: Alumno):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos: Alumno[])=>{
      if (datos){
          datos.push(dato);
          return this.storage.set(USERS_KEY, datos);
      }
      else{
        return this.storage.set(USERS_KEY, [dato]);
      }
     })
  }//fin del método add

  //obtener los Alumnos del storage
  async getAlumnos(){
    return this.storage.get(USERS_KEY);
  }


}
