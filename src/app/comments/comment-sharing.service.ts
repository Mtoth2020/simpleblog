import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comment} from "./comments.interface";

@Injectable({
    providedIn: 'root'
})
export class CommentSharingService {

    private commentSource = new BehaviorSubject({} as Comment);

    constructor() {}

    addTodo(comment: Comment) {
        this.commentSource.next(comment);
    }

    currentComment() {
        return this.commentSource.asObservable();
    }
}