import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SlideComponent } from './guide/slide/slide.component';
import { CategoryComponent } from './guide/category/category.component';
import { SummaryComponent } from './guide/summary/summary.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TestComponent,
    DashboardComponent,
    SlideComponent,
    CategoryComponent,
    DashboardComponent,
    SummaryComponent
  ],
  exports: [
    TestComponent,
    DashboardComponent,
    SlideComponent,
    CategoryComponent,
    DashboardComponent,
    SummaryComponent
  ],
})
export class StudentModule { }
