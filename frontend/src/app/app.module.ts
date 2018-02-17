import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ApiModule } from './api/api.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
