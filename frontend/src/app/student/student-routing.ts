import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakenewsIntroComponent } from './guide/intro/fakenews-intro/fakenews-intro.component';
import { TutorialContainerComponent } from './guide/tutorial-container/tutorial-container.component';
import { FakeNewsSlideContainerComponent } from './guide/slide-containers/fake-news-slide-container/fake-news-slide-container.component';
import {SocialmediaIntroComponent} from "./guide/intro/socialmedia-intro/socialmedia-intro.component";

const studentRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'tutorial',
    component: TutorialContainerComponent,
    children: [
      { path: '1', component: FakenewsIntroComponent },
      { path: '1/slides', component: FakeNewsSlideContainerComponent },
      { path: '2', component: SocialmediaIntroComponent },
      { path: '2/slides', component: FakeNewsSlideContainerComponent },
      { path: '', redirectTo: '1', pathMatch: 'full' },
      { path: '**', redirectTo: '1', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(studentRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule { }
