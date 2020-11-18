import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: '[contact-row]',
  templateUrl: './contact-row.component.html'
})
export class ContactRowComponent {
  @Input() contact: Contact;
  @Output() del = new EventEmitter<Contact>();

  constructor() { }

  edit(): void { this.contact.edit = true; }

  save(): void { this.contact.edit = false; }

  remove(): void { this.del.emit(this.contact); }

}
