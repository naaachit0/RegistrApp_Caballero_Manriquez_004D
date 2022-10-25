import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor(private httpclient: HttpClient) { }


  getTopHeadlines(){
    return (this.httpclient.get<RespuestaTopHeadlines>('https://api.victorsanmartin.com/feriados/en.json'));
  }
}



