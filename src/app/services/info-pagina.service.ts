import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/infor-pagina.intarface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = { };
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {

  this.cargarInfo();
  this.cargarEquipo();
  }

  private cargarInfo(){

    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
// leer el archivo json
      this.cargada = true;
      this.info = resp ;

    });
  }
  private cargarEquipo(){
    this.http.get('https://angular-html-ec029-default-rtdb.firebaseio.com/equipo.json')
    .subscribe ((resp: any []) => {
// leer el archivo json
      this.equipo = resp ;
      /* console.log(resp); */

    });
  }
}

