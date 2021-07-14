import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from "./contact.service";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContactRoutingModule } from "./contact-routing-module";

const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HttpClientModule,
    MatButtonModule,
      ...materialModules
  ],
  exports: [
      ...materialModules
  ],
  providers: [ ContactService ]
})
export class ContactModule { }
