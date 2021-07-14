import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PostsService} from "../posts.service";


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post: any = {};
  constructor(
      private postService: PostsService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
    const idString = this.route.snapshot.paramMap.get('id'); //extraktált elkapott id mint bejövő paraméter
    const id = Number.parseInt(idString || ""); //változtatás integerré
    if (Number.isNaN(id)) { //ha a parsolt id nem szám akkor fusson 404 hibára
      this.router.navigate(['404']);
      return;
    }
    this.postService.getPost(id)
        .subscribe(post => {
              this.post = post
            },error => {
              console.log(error)
            });
  }
}
