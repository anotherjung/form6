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
