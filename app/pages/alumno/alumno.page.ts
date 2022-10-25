import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Alumno } from '../../services/registroservice.service';
import {
  FormGroup, 
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  formularioLogin: FormGroup;
  Alumnos : Alumno[] = [];

  constructor(private alertController: AlertController,
              private navController: NavController, 
              private registroService: RegistroserviceService, 
              private fb: FormBuilder) { 
                  this.formularioLogin = this.fb.group({
                    'correo' : new FormControl("", Validators.required),
                    'password': new FormControl("", Validators.required)
                  })
              }

  ngOnInit() {
  }

  //busca el correo y password en el storage  
  async Ingresar(){
    var f = this.formularioLogin.value;
    var a=0;
    this.registroService.getAlumnos().then(datos=>{ 
      this.Alumnos = datos;
      if (!datos || datos.length==0)
      {
        return null; 
      }

      for (let obj of this.Alumnos){
        if (obj.correoAlumno == f.correo && obj.passAlumno==f.password){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado', 'true');//almacena localmente el estado de ingresado
          this.navController.navigateRoot('escanearqr');
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
      message: '¡El alumno ingresado no existe!',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }//findelmetodo



}
