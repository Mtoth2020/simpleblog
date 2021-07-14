import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h1>
      <a [routerLink]="''" routerLinkActive="active"> Simple Blog </a>
    </h1>
  `,
  //templateUrl: './header-v3.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
