import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from "./student-routing";
import { SharedModule } from "../shared/shared.module";

import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SlideComponent } from './guide/slide/slide.component';
import { CategoryComponent } from './guide/category/category.component';
import { SummaryComponent } from './guide/summary/summary.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule
  ],
  declarations: [
    TestComponent,
    DashboardComponent,
    SlideComponent,
    CategoryComponent,
    SummaryComponent
  ],
  exports: [
    TestComponent,
    DashboardComponent,
    SlideComponent,
    CategoryComponent,
    SummaryComponent
  ]
})
export class StudentModule { }
