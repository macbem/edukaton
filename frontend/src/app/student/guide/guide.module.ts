import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { SlideComponent } from './slide/slide.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryComponent, SlideComponent, SummaryComponent]
})
export class GuideModule { }
