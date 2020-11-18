import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  @Input() contacts: Contact[];
  @Output() contactAdded = new EventEmitter<Contact>();

  newContact = {} as Contact;

  addContact(): void {
    this.contactAdded.emit(this.newContact);
    this.newContact = {} as Contact;
  }

}
