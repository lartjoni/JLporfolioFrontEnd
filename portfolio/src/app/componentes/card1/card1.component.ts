import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
miPersona:any; //puedo cambiar por miCard1:any u otro alias
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(dato =>{
      console.log(dato);
      this.miPersona=dato;
    });  
    
  }

  /* 
  miPersona:any; //puedo cambiar por miCard1:any u otro alias
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(dato =>{
      console.log(dato);
      this.miPersona=dato;
    });  
    
  }
  */

}


/* import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common' 

pa general archivo.ts dentro de una carpeta por comando:  ng g class model/expe --skip-tests
y pa service : ng g s servicios/persona --skip-tests
  */