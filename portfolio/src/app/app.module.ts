import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PortfolioService } from './servicios/portfolio.service';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { Card1Component } from './componentes/card1/card1.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { EducacioneditComponent } from './componentes/modales/educacionedit/educacionedit.component';
import { EducacionewComponent } from './componentes/modales/educacionew/educacionew.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    NavbarComponent,
    BannerComponent,
    Card1Component,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    EducacioneditComponent,
    EducacionewComponent,
    SkillsComponent,
    ProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }


//en providers: [], agrego dentro PorfolioService y automaticamente creo la import de linea 11
//en imports: [etc,etc, agrego HttpClientModule linea26] y import en 12 tambien manualmente