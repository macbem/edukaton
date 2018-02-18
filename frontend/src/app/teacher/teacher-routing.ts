import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const teacherRoutes: Routes = [
  { path: 'teacher-dashboard', component: DashboardComponent }
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
