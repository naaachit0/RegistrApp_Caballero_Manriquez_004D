import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
})
export class GenerarqrPage implements OnInit {

  qrCodeString = '';
  scannedResult:any;

  constructor() { }

  usuario={
    nom:'',
  }

  fecha={
    date:'',
  }



  generateScan(){
    this.qrCodeString = this.usuario.nom + ' ' + this.fecha.date;

  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }

  ngOnInit() {
  }

}
