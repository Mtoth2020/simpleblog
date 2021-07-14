import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { BlogComponent} from "../posts/blog-v3/blog.component";
//import { PostDetailComponent } from "../posts/post-detail/post-detail.component";
import {NotFoundComponent} from "../posts/not-found/not-found.component";
import { PageComponent} from "../posts/page/page.component";
//import {ContactComponent} from "../contact/contact/contact.component";
import { AuthGuard} from "../auth/auth.guard";
import {PostResolver} from "../posts/post.resolver";

const routes: Routes = [
  //{ path: "", component: BlogComponent },
  {
    path: "",
    resolve: {
      posts: PostResolver
    },
    component: BlogComponent
  },
  //{ path: "posts/:id", component: PostDetailComponent },
  { path: "posts/:id", loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule) },
  { path: "terms-and-conditions", component: PageComponent },
  { path: "about-us", component: PageComponent },
  //{ path: "contact", component: ContactComponent },
  { path: "contact", loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule) },
  { path: "admin", canLoad: [AuthGuard],loadChildren: () => import('../../feature/feature.module').then(m => m.FeatureModule) },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostResolver],
  exports: [RouterModule]
})

export class AppRoutingModule { }
