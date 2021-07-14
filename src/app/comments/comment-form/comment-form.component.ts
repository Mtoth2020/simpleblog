import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AbstractControl, Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {newComment} from "../newComment.interface";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})

export class CommentFormComponent implements OnInit {

    @Output()
    newCommentEvent = new EventEmitter<newComment>();

    myForm: FormGroup = new FormGroup({
        firstName: new FormControl(
            null,
            [
            Validators.required,
            Validators.minLength(3),
            ]),
        lastName: new FormControl(
            null,
            [
            Validators.required,
            Validators.minLength(3),
            ]),
        email: new FormControl(
            null,
            [
            Validators.required,
            Validators.email,
            ]),
        comment: new FormControl(
            null,
            [
            Validators.required,
            Validators.minLength(10),
            ]),
        terms: new FormControl(
            null,
            [
            Validators.requiredTrue
            ])
  });

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(): void {

    let newComment = {
        firstName: this.firstName?.value as string,
        lastName: this.lastName?.value as string,
        email: this.email?.value as string,
        comment: this.comment?.value as string
    };
    this.newCommentEvent.emit(newComment);
    this.myForm.reset();
    }

    get email(): AbstractControl | null {
        return this.myForm.get('email');
        }
    get terms(): AbstractControl | null {
        return this.myForm.get('terms');
        }
    get firstName(): AbstractControl | null {
        return this.myForm.get('firstName');
        }
    get lastName(): AbstractControl | null {
        return this.myForm.get('lastName');
    }
    get comment(): AbstractControl | null {
        return this.myForm.get('comment');
    }

}
