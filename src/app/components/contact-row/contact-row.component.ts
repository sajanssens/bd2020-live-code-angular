import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
  selector: '[contact-row]',
  templateUrl: './contact-row.component.html'
})
export class ContactRowComponent {
  @Input() contact: Person;
  @Output() del = new EventEmitter<Person>();

  constructor() { }

  edit(): void { this.contact.edit = true; }

  save(): void { this.contact.edit = false; }

  remove(): void { this.del.emit(this.contact); }

}
