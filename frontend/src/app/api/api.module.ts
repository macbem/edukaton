import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideService } from './guide.service';
import { TestService } from './test.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    GuideService,
    TestService
  ],
  declarations: []
})
export class ApiModule { }
