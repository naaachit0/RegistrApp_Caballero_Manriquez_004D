import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Alumno } from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.page.html',
  styleUrls: ['./inicio-alumno.page.scss'],
})
export class InicioAlumnoPage implements OnInit {
  formularioRegistro : FormGroup;
  newRegistro: Alumno = <Alumno>{};

  constructor(private alertController: AlertController, 
    private registroService: RegistroserviceService, 
    private toastController: ToastController, 
    private fb: FormBuilder) { 
        this.formularioRegistro = fb.group({ 
          'nombre' : new FormControl("", Validators.required),
          'correo' : new FormControl("", Validators.required),
          'password': new FormControl("", Validators.required),
          'confirmaPass': new FormControl("", Validators.required)
        })
     }

     ngOnInit() {
    }
  
    async CrearAlumno(){
      var form = this.formularioRegistro.value;
      if(this.formularioRegistro.invalid){
        const alert = await this.alertController.create({
          header : 'Error..', 
          message: 'Debe ingresar todos los datos', 
          buttons: ['Aceptar']
        })
        await alert.present();
        return;
      }
      else{
        this.newRegistro.nomAlumno = form.nombre;
        this.newRegistro.correoAlumno = form.correo;
        this.newRegistro.passAlumno = form.password; 
        this.newRegistro.repassAlumno = form.confirmaPass;
        this.registroService.addAlumno(this.newRegistro).then(dato =>{
          this.newRegistro = <Alumno>{};
          this.showToast('Alumno Creado con éxito!');
        })
      }//findelelse
      this.formularioRegistro.reset();
    }//findelmetodo
  
  
    async showToast(msg){
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
      })
      toast.present();
    }
  
  
  }
  