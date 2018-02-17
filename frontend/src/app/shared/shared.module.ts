import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavComponent,
    TestComponent
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
