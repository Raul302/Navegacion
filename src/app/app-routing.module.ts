import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UsuariosComponent } from './usuarios/usuarios.component';
// import { PostComponent } from './post/post.component';


const routes: Routes = [
  // { path:'abc', component: PostComponent,pathMatch:'full'},
  // { path:'abc', component: PostComponent,pathMatch:'prefix'},

  {path: '',redirectTo: '/usuarios',pathMatch: 'full'},
  // {path: '**',redirectTo: '/usuarios',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
