import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  @Input() persons: Person[];
  @Output() personAdded = new EventEmitter<Person>();

  newContact = new Person();

  addContact(): void {
    // this.persons.push(this.newContact);
    this.personAdded.emit(this.newContact);
    this.newContact = new Person();
  }

}
