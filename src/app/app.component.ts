import { Component } from '@angular/core';
//export { Post };
import { PostsService} from "./posts/posts.service";
import { Post } from "./posts/posts.interface";


/*interface Post {
  id: number,
  title: string,
  body: string,
  postImg?: string
}*/

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  <!--  <app-blog></app-blog>-->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-blog-v3';

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    //getAll array:
    this.postsService.getPosts_Alt().subscribe(posts => {
      console.log("getPosts()", posts);
    })
    //get a post-element by id:
    this.postsService.getPost(4).subscribe(post => {
      console.log("getPost(4)", post);
    })
}

}



