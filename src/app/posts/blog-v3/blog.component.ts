import {Component, OnInit} from '@angular/core';
//import { Post } from '../../app.component';
//import {PostsService} from "../posts.service";
import {Post} from "../posts.interface";
//import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import {NotificationType} from "../notification/notification.component";

@Component({
  selector: 'app-blog',
  template: `          
  <h1>This is my Travel Blog</h1>
  <app-notification *ngIf="hasError" [code]="errorCode"></app-notification>
  <div *ngIf="!hasError" class="grid-container">
   <!-- <article *ngFor="let post of data" [id]="post.id">
        <article *ngFor="let post of data" id="{{post.id}}">
            <img src="" alt="">
                <h3> {{post.title}} </h3>
                <p> {{post.body}} </p>
                <a href='#'> read more </a>
        </article>-->
   <div *ngFor="let post of posts" id="{{post.id}}">
      <app-post-item [input]="post"></app-post-item>
    </div>
  </div>`,
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];
  //postService: PostsService;
  hasError: boolean = false;
  errorCode: NotificationType = NotificationType.Unknown;

  constructor(
      //postService: PostsService,
      private router: ActivatedRoute) { //a postService mint bemenő adat egy példánya a post.service.ts-nek
    //this.postService = postService; //ezáltal az egész blog komponensben elérhetővé válik
  }

  ngOnInit(): void {
    //this.posts = this.postService.getPosts();
   /* this.postService.getPosts_Alt()
        .subscribe(
            posts => {
              this.posts = posts;
              this.hasError = false;
            },
            error => {
              this.hasError = true;
              this.errorCode = error.notificationCode;
            });*/

      this.posts =  this.router.snapshot.data.posts;
  }
}
