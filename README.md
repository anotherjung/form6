#form6
ng build new 

>start firebase, firestore, hosting, all defaults, yes single webpage
firebase init

>start angular, yes routing, css
ng new autobody
>>test, should see ng welcome page  
cd autobody 
ng serve
:42000

>connect firebase to angular 
ng build --prod
>>update firebase.json
>>before
```
  "hosting": {
    "public": "public",
```
>>after
```
  "hosting": {
    "public": "autobody/dist/autobody",
```

# adding form
## app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms'; //form1


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule //form1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

##app.component.ts
```
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'; //form12

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autobody';
  name = new FormControl(''); //form12
}

```

##app.component.html 
```
<!-- form13 -->
<label>
  Name:
  <input type="text" [formControl]="name">
</label>
<p>
  Value: {{ name.value }}
</p>
<!-- ends -->
<router-outlet></router-outlet>s
```