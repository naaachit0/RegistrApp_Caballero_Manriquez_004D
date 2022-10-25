import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistrodocenteserviceService, Docente } from '../../services/registrodocenteservice.service';
import {  FormGroup,
          FormControl,
          Validators,
          FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {
  formularioLogin: FormGroup;
 Docentes :Docente[] = [];

  constructor(private alertController: AlertController,
              private navController: NavController, 
              private registroService: RegistrodocenteserviceService, 
              private fb: FormBuilder) { 
                  this.formularioLogin = this.fb.group({
                    'correo' : new FormControl("", Validators.required),
                    'password': new FormControl("", Validators.required)
                  })
              }

  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value;
    var a=0;
    this.registroService.getDocentes().then(datos=>{ 
      this.Docentes = datos;
      if (!datos || datos.length==0)
      {
        return null; 
      }

      for (let obj of this.Docentes){
        if (obj.correoDocente == f.correo && obj.passDocente==f.password){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado', 'true');//almacena localmente el estado de ingresado
          this.navController.navigateRoot('generarqr');
        }
      }//for 
      if (a==0){
        this.alertMsg();
      }
    })
  }//findelmétodo

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: '¡El docente ingresado no existe!',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }//findelmetodo



}



  


