import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebApiService } from '../services/web-api.service';
import { Usuario } from '../models/usuario';


@Component({
  selector: 'app-usuarios-listado',
  templateUrl: './usuarios-listado.component.html',
  styleUrls: ['./usuarios-listado.component.css']
})
export class UsuariosListadoComponent implements OnInit {

  constructor(private router: Router,
    private webApiService: WebApiService) { }
    usuarios: Usuario[];

  ngOnInit(){
    this.webApiService
    .ObtenerUsuarios()
    .subscribe(
      (usuariosDelApi: Usuario[]) => this.usuarios = usuariosDelApi,
      error => console.error(error)
    );
  }
  verPost(idUsuario:number){
    this.router.navigate(["/usuarios",idUsuario,'posts']);
  }

}
