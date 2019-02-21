# form6
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

## app.component.ts
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

## app.component.html 
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

# add bootstrap to angular

## install npm 
cd autobody
c
## update angular.json, 
## search for style and add two sections 
```
"styles": [ "./node_modules/bootstrap/dist/css/bootstrap.min.css", "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css", "src/styles.css" ],
```


## Open src/app/app.module.ts and add: 
>1
import { ButtonsModule } from 'ngx-bootstrap/buttons'; //bootstrap1
>2
@NgModule({ ... imports: [ButtonsModule.forRoot(), ... ], ... })

## update app.component.html
>1
```
<!-- bootstrap1 -->
<button type="button" class="btn btn-primary">
  Single Button
</button>
<!-- ends -->
```

## sadding form groups

```
import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'; //form12, form22

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autobody';
  name = new FormControl(''); //form12

  //form22
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  //ends
}

```

# adding firebase firestore
npm install angularfire2 firebase --save
npm audit fix --force

>src/environments
,,,
  //firebase1
  ,firebase: {
    grab api keys from firebase console
  }
  //ends
,,,

# adding fireformgoup
ng g c fireformgroup
>see folder 