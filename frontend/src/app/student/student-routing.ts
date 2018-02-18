import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakenewsIntroComponent } from './guide/intro/fakenews-intro/fakenews-intro.component';
import { TutorialContainerComponent } from './guide/tutorial-container/tutorial-container.component';
import { FakeNewsSlideContainerComponent } from './guide/slide-containers/fake-news-slide-container/fake-news-slide-container.component';
import { SocialmediaIntroComponent } from "./guide/intro/socialmedia-intro/socialmedia-intro.component";
import {SummaryComponent} from "./guide/summary/summary.component";
// import {SocialMediaSlideContainerComponent} from "./guide/slide-containers/social-media-slide-container/social-media-slide-container.component";
import { TestComponent } from './test/test.component';
import { TestResolver } from '../api/resolvers/test.resolver';

const studentRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'tutorial',
    component: TutorialContainerComponent,
    children: [
      { path: '1', component: FakenewsIntroComponent },
      { path: '1/slides', component: FakeNewsSlideContainerComponent },
      // { path: '2', component: SocialmediaIntroComponent },
      // { path: '2/slides', component: SocialMediaSlideContainerComponent },
      { path: 'summary', component: SummaryComponent },
      { path: '', redirectTo: '1', pathMatch: 'full' },
      { path: '**', redirectTo: '1', pathMatch: 'full' }
    ]
  },
  {
    path: 'test/:id',
    component: TestComponent,
    resolve: {
      test: TestResolver
    }
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
