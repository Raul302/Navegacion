import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebApiService } from '../services/web-api.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router:Router,
    private route: ActivatedRoute,
    private webServiceApi: WebApiService
    ) { }

    posts: Post[];


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has("id")){
        this.webServiceApi.ObtenerPostPorUsuario(params.get("id")).subscribe(posts => this.posts = posts);
      } else{
        this.webServiceApi.ObtenerPosts().subscribe(posts => this.posts = posts);
      }
    })
  }

  // Navegacion desde Ty
  navegarHaciaUsuarios()
  {
    this.router.navigate(['/usuarios']);
  }

}
