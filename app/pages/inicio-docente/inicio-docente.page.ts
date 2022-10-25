import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistrodocenteserviceService, Docente } from '../../services/registrodocenteservice.service';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-inicio-docente',
  templateUrl: './inicio-docente.page.html',
  styleUrls: ['./inicio-docente.page.scss'],
})
export class InicioDocentePage implements OnInit {
  formularioRegistro : FormGroup;
  newRegistro: Docente = <Docente>{};

  constructor(private alertController: AlertController, 
    private registroService: RegistrodocenteserviceService, 
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

    async CrearDocente(){
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
        this.newRegistro.nomDocente = form.nombre;
        this.newRegistro.correoDocente = form.correo;
        this.newRegistro.passDocente = form.password; 
        this.newRegistro.repassDocente = form.confirmaPass;
        this.registroService.addDocente(this.newRegistro).then(dato =>{
          this.newRegistro = <Docente>{};
          this.showToast('Docente Creado con éxito!');
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
