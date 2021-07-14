import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { ContactFormMessage } from "./contact/contact.component";


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  static readonly API_URL = `http://localhost:3000/messages`;

  constructor(private http: HttpClient) {

  }
  getMessages(): Observable<ContactFormMessage[]> {
    return this.http.get<ContactFormMessage[]>(ContactService.API_URL);
  }

  sendMessage(message: ContactFormMessage | null): Observable<ContactFormMessage> {
    return this.http.post<ContactFormMessage>(ContactService.API_URL, message)
  }
}
