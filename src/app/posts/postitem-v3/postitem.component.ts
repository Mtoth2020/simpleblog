import {Component, Input, OnInit} from '@angular/core';
//import { Post } from '../../app.component';
import { Post } from "../posts.interface";

@Component({
  selector: 'app-post-item',
  templateUrl: './postitem.component.html',
  styleUrls: ['./postitem.component.scss']
})
export class PostitemComponent implements OnInit {

  @Input()
  input: Post | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
