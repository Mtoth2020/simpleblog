import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Post} from "./posts.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class PostResolver implements Resolve<Post[]> {

  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }
}
