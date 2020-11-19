import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {CartEvent} from '../../models/CartEvent';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {

  @Input() message = 'Hello world';
  @Output() thankYou = new EventEmitter();
  @Output() contentChanged = new EventEmitter<CartEvent>();

  // // optie 1: zoals we kennen uit java
  // private naam: string;
  // constructor(n: string) {
  //   this.naam = n;
  // }

  // optie 2: param en field in één keer declareren:
  // constructor(private naam: string) {
  //
  // }

  constructor(private service: ContactService) {
  }

  handleClick(): void {
    this.contentChanged.emit({actionType: 'add', item: {description: 'VW Golf', price: 1000.01}});
    this.thankYou.emit('Bedankt!');
  }

}
