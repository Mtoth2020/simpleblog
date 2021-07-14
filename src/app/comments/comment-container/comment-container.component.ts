import {Component, Input, OnInit} from '@angular/core';
import { CommentService} from "../comment.service";
import { Comment} from "../comments.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss']
})
export class CommentContainerComponent implements OnInit {

  comments: Comment[] = [];

  @Input()
  comment: Comment | undefined;

  constructor(private commentService: CommentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    const postId = Number.parseInt(idString || "");
    this.commentService.getCommentsByPostId(postId).subscribe(comments => {
        this.comments = comments;
    })
  }
}



/*
For testing:
this.commentService.getCommentsByPostId(3).subscribe(comments => {
  console.log("getComment(3)", comments);
})*/

/*this.commentService.getCommentById(3).subscribe(comment => {
  console.log("getComment(3)", comment);
})*/

/*
  textMessage: string = "";
  subMessage: string = "";

this.commentService.getCommentsByPostId(postId).subscribe(comments => {
  this.comments = comments;
  if(this.comments.length === 0) {
   this.textMessage = "Any thoughts?";
   this.subMessage = "Be the first, and drop your ideas on the topic!"
 }*/