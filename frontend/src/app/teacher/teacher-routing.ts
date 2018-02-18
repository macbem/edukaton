import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateNewTestComponent } from "./create-new-test/create-new-test.component";

const teacherRoutes: Routes = [
  { path: 'teacher-dashboard', component: DashboardComponent },
  { path: 'test/create', component: CreateNewTestComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(teacherRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class TeacherRoutingModule { }
