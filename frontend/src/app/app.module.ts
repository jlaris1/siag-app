import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotifierModule } from "angular-notifier";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NotifierModule.withConfig({
        // Custom options in here
    })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
