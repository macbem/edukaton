import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavComponent,
    TestComponent,
    HeaderComponent,
    ToastComponent
  ],
  exports: [
    NavComponent,
    HeaderComponent,
    ToastComponent
  ]
})
export class SharedModule { }
