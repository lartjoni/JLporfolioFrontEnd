import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experienciaList:any; //puedo cambiar por  otro alias
  constructor(private datosPortfolio:PortfolioService) {}


  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.experienciaList=data.experiencias; //data.  y despues del punto poner url de experiencia
    });  
  }

}
