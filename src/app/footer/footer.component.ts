import { Component, OnInit } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-footer',
  template: `      
    <nav>
      <a *ngFor="let item of nav"
         [routerLink]="item.link"
         routerLinkActive="active"
         [routerLinkActiveOptions]="{ exact: item.exact }">
        {{ item.name }}
      </a>
    </nav>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  nav: Nav[] = [
    {link: "/", exact: true, name: "Home"},
    {link: "/terms-and-conditions", exact: true, name: "Terms & Conditions"},
    {link: "/about-us", exact: true, name: "About Us"},
    {link: "/contact", exact: true, name: "Contact"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
