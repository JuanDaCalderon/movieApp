import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListadoComponent } from './components/listado/listado.component';
import { InfoComponent } from './components/info/info.component';
import { CarritoComponent } from './components/carrito/carrito.component';


const routes: Routes = [
  {
    pathMatch: 'full',
    path:'',
    component: LoginComponent
  },
  {
    pathMatch: 'full',
    path:'login',
    component: LoginComponent
  },
  {
    pathMatch: 'full',
    path: 'registro',
    component: RegistroComponent
  },
  {
    pathMatch: 'full',
    path: 'listado',
    component: ListadoComponent
  },
  {
    pathMatch: 'full',
    path: 'detalle',
    component: InfoComponent
  },
  {
    pathMatch: 'full',
    path: 'carrito',
    component: CarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
