import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosListadoComponent } from './usuarios-listado/usuarios-listado.component';
import { UsuariosDetalleComponent } from './usuarios-detalle/usuarios-detalle.component';


const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent,
  children: [
    {path:'',component: UsuariosListadoComponent},
    {path:':id',component: UsuariosDetalleComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
