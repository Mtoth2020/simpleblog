import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from "rxjs/operators";
import {NotificationType} from "./posts/notification/notification.component";
import {NotificationError} from "./custom.error";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<Error>> {
    return next.handle(request)
        .pipe(
            retry(1),
            catchError(this.handleError.bind(this))
        );
  }

  handleError(error: HttpErrorResponse): Observable<HttpEvent<Error>>{
    let errorObj = {
      message: "",
      notificationCode: NotificationType.Unknown
    };

    if (error.error instanceof ProgressEvent) {
      // client-side error
      errorObj.message = `(Client-side error): ${error.message}`;
    } else {

      // server-side error
      errorObj.notificationCode = this.getServerErrorNotificationCode(error);
      errorObj.message = `
          Code: ${error.status}\n
          Message: ${this.getServerErrorMessage(error)}
        `;
    }

    return throwError(new NotificationError(errorObj));
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }
    }
  }

  private getServerErrorNotificationCode(error: HttpErrorResponse): number {
    switch (error.status) {
      case 404: {
        return NotificationType.NotFound;
      }
      default: {
        return NotificationType.Unknown;
      }
    }
  }
}


