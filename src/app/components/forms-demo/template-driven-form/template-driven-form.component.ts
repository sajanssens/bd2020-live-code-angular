import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  postalCode: string;

  constructor() { }

  ngOnInit(): void {
    this.postalCode = '';
  }

  save(): void {
    console.log(this.postalCode);
  }

}
