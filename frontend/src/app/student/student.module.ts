import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRoutingModule } from "./student-routing";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule
  ],
  declarations: [
    TestComponent,
    DashboardComponent,
  ]
})
export class StudentModule { }
