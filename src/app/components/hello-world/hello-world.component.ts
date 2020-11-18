import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {

  @Input() message = 'Hello world';
  @Output() thankYou = new EventEmitter();

  handleClick(){
    this.thankYou.emit('Bedankt!');
  }

}
