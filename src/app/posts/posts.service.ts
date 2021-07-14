import { Injectable } from '@angular/core';
//import { Post } from "../app.component"; // comment: (used in previous exercise with SimpleBlog
import {Observable} from "rxjs";
import { posts } from '../mock-posts';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Post } from "./posts.interface";


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public getPosts(): Post[] {
    return posts;
  }

  static readonly API_URL = `http://localhost:3000/posts`;
  //static  readonly API_URL = `https://jsonplaceholder.typicode.com/posts`;

  constructor(private http: HttpClient) {}

  //get all posts:
  getPosts_Alt(limit = 30): Observable<Post[]> {
    return this.http.get<Post[]>(PostsService.API_URL, {
      params: new HttpParams().set('_limit', limit.toString())
      });
  }

  //get a post (by id)
  getPost(id: number | string | null): Observable<Post> {
    return this.http.get<Post>(PostsService.API_URL + `/${id}`)
  }
}


