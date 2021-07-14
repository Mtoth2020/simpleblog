import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog-v3/blog.component';
import { PostitemComponent } from './postitem-v3/postitem.component';
import { TruncateV3 } from './truncate-v3.pipe';
//import { PostsService } from "./posts.service"; (comment: törölve providers-ből)
import { HttpClientModule} from "@angular/common/http";
import { NotificationComponent } from './notification/notification.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule} from "@angular/router";
import { PageComponent } from './page/page.component';
import { ContactComponent } from '../contact/contact/contact.component';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { CommentsModule} from "../comments/comments.module";
import { PostRoutingModule} from "./post-routing-module";
import { PostResolver} from "./post.resolver";

@NgModule({
  declarations: [
    BlogComponent,
    PostitemComponent,
    TruncateV3,
    NotificationComponent,
    PostDetailComponent,
    NotFoundComponent,
    PageComponent,
    ContactComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        CommentsModule,
        PostRoutingModule
    ],
  exports: [BlogComponent],
  providers: [PostResolver]
})
export class PostsModule { }
