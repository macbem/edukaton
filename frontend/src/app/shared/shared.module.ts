import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './toast/toast.component';
import { ContactComponent } from './contact/contact.component';
import { NavInsideMenuComponent } from './nav/nav-inside-menu/nav-inside-menu.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSnackBarModule
  ],
  declarations: [
    NavComponent,
    TestComponent,
    HeaderComponent,
    ToastComponent,
    ContactComponent,
    NavInsideMenuComponent
  ],
  exports: [
    NavComponent,
    HeaderComponent,
    ToastComponent,
    ContactComponent,
    NavInsideMenuComponent
  ]
})
export class SharedModule { }
