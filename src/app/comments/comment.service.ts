import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Comment } from "./comments.interface";
import { commentToSave } from "./newComment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  static readonly API_URL = `http://localhost:3000/comments`

  constructor(private http: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(CommentService.API_URL);
  }

  getCommentsByPostId(postId: number):Observable<Comment[]>{
    return this.http.get<Comment[]>(CommentService.API_URL + `?postId=${postId}`)
  }

  getCommentById(id: number):Observable<Comment[]>{
    return this.http.get<Comment[]>(CommentService.API_URL + `/${id}`)
  }

  sendComment(comment: commentToSave | undefined): Observable<commentToSave>{
    return this.http.post<commentToSave>(CommentService.API_URL, comment)
  }

}
