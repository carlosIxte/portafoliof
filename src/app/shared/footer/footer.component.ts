import { Component, OnInit } from '@angular/core';
import { Statement } from '@angular/compiler';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

anio: number = new Date().getFullYear();



  // tslint:disable-next-line: variable-name
  constructor( public _Servicio: InfoPaginaService ) { }

  ngOnInit(): void {
  }

}
