import { Component, Input, OnInit } from '@angular/core';
import {commentToSave, newComment} from "../newComment.interface";
import { CommentService } from "../comment.service";
import {Comment} from "../comments.interface";

enum NotificationColor {
  Red = "red",
  Green = "green"
}

@Component({
  selector: 'app-comment-form-container',
  templateUrl: './comment-form-container.component.html',
  styleUrls: ['./comment-form-container.component.scss']
})
export class CommentFormContainerComponent implements OnInit {

  comments: Comment[] = [];

  @Input()
  postId: number | null = null;
  errorMessage: string = "";
  textMessage: string = "";
  userComment: commentToSave | null = null;
  style: NotificationColor | string = "";
  isNotificationVisible: boolean = false;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
  }

  onComment(newCommentEvent: newComment) {
    const result: commentToSave = {
      name: newCommentEvent.firstName + " " + newCommentEvent.lastName,
      email: newCommentEvent.email,
      body: newCommentEvent.comment,
      postId: this.postId as number
    };
    this.commentService.sendComment(result).subscribe({
      next: result => {
        this.userComment = result;
        this.textMessage = "Your comment added successfully!";
        this.style = NotificationColor.Green;
        this.isNotificationVisible = true;
      },
      error: error => {
        this.errorMessage = "Send failed. Network error. Please try again later!";
        error.message = this.errorMessage;
        this.style = NotificationColor.Red;
        this.isNotificationVisible = true;
      }
    })
  }


}
