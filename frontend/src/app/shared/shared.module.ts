import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavComponent,
    TestComponent,
    HeaderComponent
  ],
  exports: [
    NavComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
