import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentService } from "./comment.service";
import { NgpSortModule } from "ngp-sort-pipe";
import { CommentFormContainerComponent } from './comment-form-container/comment-form-container.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CommentContainerComponent,
    CommentItemComponent,
    CommentFormContainerComponent,
    CommentFormComponent
  ],
    imports: [
        CommonModule,
        NgpSortModule,
        ReactiveFormsModule,
        MatButtonModule
    ],
  exports: [
      CommentContainerComponent,
      CommentFormContainerComponent
  ],
  providers: [CommentService]
})
export class CommentsModule { }
