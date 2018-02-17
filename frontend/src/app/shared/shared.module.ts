import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { NavInsideMenuComponent } from './nav/nav-inside-menu/nav-inside-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavComponent,
    TestComponent,
    HeaderComponent,
    ContactComponent,
    NavInsideMenuComponent
  ],
  exports: [
    NavComponent,
    HeaderComponent,
    ContactComponent,
    NavInsideMenuComponent
  ]
})
export class SharedModule { }
