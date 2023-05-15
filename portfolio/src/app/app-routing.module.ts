import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { Card1Component } from './componentes/card1/card1.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';

const routes: Routes = [
  {path:'portfolio',component:PortfolioComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'banner',component:BannerComponent},
  {path:'card1',component:Card1Component},
  {path:'acercade',component:AcercadeComponent},
  {path:'experiencia',component:ExperienciaComponent},
  {path:'educacion',component:EducacionComponent},
  {path:'skills',component:SkillsComponent},
  {path:'proyecto',component:ProyectoComponent},
  {path:'**',redirectTo:'/portfolio',pathMatch:'full'}
  //{path:'',redirectTo:'/portfolio',pathMatch:'full'},
  //{path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
