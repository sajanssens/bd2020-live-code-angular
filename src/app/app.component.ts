import { Component } from '@angular/core';

@Component({ // decorator, meta data
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  today = new Date();

}
