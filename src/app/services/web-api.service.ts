import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Post } from '../models/post';



@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  baseUrlUsers = environment.apiURL +'users/';
  baseUrlPosts = environment.apiURL +'posts/';

  constructor(private http: HttpClient) {}
  ObtenerUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseUrlUsers);
  }
  ObtenerPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrlPosts);
  }
  ObtenerPostPorUsuario(id: string): Observable<Post[]>{
    const url = `${this.baseUrlPosts}?userId=${id}`;
    return this.http.get<Post[]>(url);
  }
}
