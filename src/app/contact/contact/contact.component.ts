import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ContactService } from "../contact.service";

enum NotificationColor {
  Red = "red",
  Green = "green"
}

export interface ContactFormMessage {
  name: string,
  email: string,
  message: string,
  acceptedTermsAndConditions: boolean
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input()
  message: ContactFormMessage | null = null;
  errorMessage: string = "";
  textMessage: string = "";
  style: NotificationColor | string = "";
  isNotificationVisible: boolean = false;

  constructor(private contactService: ContactService) {}

  ngOnInit() {

    this.contactService.getMessages().subscribe(messages => {
      console.log(messages);
    })
  }

  onSubmit(form: NgForm):void {
    this.message = form.value;
    console.log(this.message);
    let newMessage = this.message;
    this.contactService.sendMessage(newMessage).subscribe({
      next: newMessage => {
        this.message = newMessage;
        this.textMessage = "Your messages arrived! I will get back to You shortly!"
        this.style = NotificationColor.Green;
        this.isNotificationVisible = true;
        form.reset();
      },
      error: error => {
        this.errorMessage = "Send failed. Network error. Please try again later!";
        error.message = this.errorMessage;
        this.style = NotificationColor.Red;
        this.isNotificationVisible = true;
      }
    })
  }
}


//teszteléshez:

//console.log("form", form);
//console.log("form.value", form.value);

/*this.contactService.sendMessage(newMessage).subscribe(message => {
  console.log(".sendMessage(newMessage)", message)
  });*/

/*let newMessage = { name: "teszt", email: "micimacko@gmail.com", message: "A legjobb barátom Malacka", acceptedTermsAndConditions: true} as ContactFormMessage;
  this.contactService.sendMessage(newMessage).subscribe(message => {
    console.log(".sendMessage(newMessage)", message)
  });*/

/* if(form.submitted && form.valid) {
    this.textMessage = "Your messages arrived! I will get back to You shortly!";
    this.style = NotificationColor.Green;
  }*/
