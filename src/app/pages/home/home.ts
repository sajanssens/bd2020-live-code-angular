import { Component, OnInit } from '@angular/core';

@Component({  
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  imgloc  = "assets/img/werkplek.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
