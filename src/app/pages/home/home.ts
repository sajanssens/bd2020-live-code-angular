import {Component} from '@angular/core';

@Component({
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  imgloc = 'assets/img/werkplek.jpg';

  today = new Date();

}
