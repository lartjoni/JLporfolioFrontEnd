import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
form: any;  //estos 2 por ahora son any
onEnviar: any;

baner:any;
constructor(private datosPortfolio:PortfolioService) {}


ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe(data =>{
    console.log(data);
    this.baner=data;
  });  
}

}
