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
