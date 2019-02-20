import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms'; //form1

import { ButtonsModule } from 'ngx-bootstrap/buttons'; //bootstrap1


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,ReactiveFormsModule //form1
    ,ButtonsModule //bootstrap1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
