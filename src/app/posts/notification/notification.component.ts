import { Component, Input, OnInit } from '@angular/core';

enum NotificationColor {
  Red = "red",
  Blue = "blue"
}
export enum NotificationType {
  Unknown = 0,//ha leállítom a json servert pl.
  NotFound = 1 //post1 link, nincs a szerveren ez a link
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input()
  code: NotificationType = NotificationType.Unknown;
  boldText: string = "Oops! Error!";
  text: string = "Something happened! Try again later!";
  color: NotificationColor = NotificationColor.Red;

  constructor() {}

  ngOnInit(): void {
    if(this.code === NotificationType.NotFound) {
      this.boldText = "Oops!";
      this.text = "No posts yet :-(";
      this.color = NotificationColor.Blue;
    }
  }

}
