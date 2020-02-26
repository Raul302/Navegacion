import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UsuariosComponent } from './usuarios/usuarios.component';
// import { PostComponent } from './post/post.component';
import { MenuComponent } from './menu/menu.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PostsModule } from './posts/posts.module';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [
    AppComponent,
    // UsuariosComponent,
    // PostComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsuariosModule,
    PostsModule,
    PostModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
