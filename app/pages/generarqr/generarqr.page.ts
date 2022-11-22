import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
})
export class GenerarqrPage implements OnInit {

  qrCodeString = 'Hola Mundo';
  scannedResult:any;

  constructor() { }

  usuario={
    nom:'',
  }

  generateScan(){
    this.qrCodeString = this.usuario.nom;

  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }

  ngOnInit() {
  }

}
