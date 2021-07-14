import {Component, Input, OnInit} from '@angular/core';
import { Comment} from "../comments.interface";

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {

  @Input()
  input: Comment | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
