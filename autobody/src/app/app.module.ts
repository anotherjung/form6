import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms'; //form1

import { ButtonsModule } from 'ngx-bootstrap/buttons'; //bootstrap1

import { AngularFireModule } from 'angularfire2';  //form9firebase
import { environment } from '../environments/environment'; //form9firebase
import { AngularFirestoreModule } from 'angularfire2/firestore'; //form9firebase
import { FireformgroupComponent } from './fireformgroup/fireformgroup.component'; //form9firebase


@NgModule({
  declarations: [
    AppComponent,
    FireformgroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,ReactiveFormsModule //form1
    ,ButtonsModule //bootstrap1
    ,AngularFireModule.initializeApp(environment.firebase) //form9firebase
    ,AngularFirestoreModule, //form9firebase imports firebase/firestore, only needed for database features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
