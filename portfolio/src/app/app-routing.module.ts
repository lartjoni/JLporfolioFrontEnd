import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { Card1Component } from './componentes/card1/card1.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';

const routes: Routes = [
  {path:'portfolio',component:PortfolioComponent},
  {path:'card1',component:Card1Component},
  {path:'educacion',component:EducacionComponent},
  {path:'**',redirectTo:'/portfolio',pathMatch:'full'}
  //{path:'',redirectTo:'/portfolio',pathMatch:'full'},
  //{path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
