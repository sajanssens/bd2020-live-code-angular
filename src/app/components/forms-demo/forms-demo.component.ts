import { Component, ViewChild } from '@angular/core';
import { HelloWorldComponent } from '../hello-world/hello-world.component';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent {

  @ViewChild(HelloWorldComponent)
  helloWorldComponent: HelloWorldComponent;

  eenBericht = 'Een berichtje uit de parent component';

  handleThankYou(e: InputEvent): void {
    console.log(e);
    this.helloWorldComponent.message = 'Thanks...';
  }
}
