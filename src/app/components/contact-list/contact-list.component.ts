import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  @Input() contacts: Contact[];

  delete(c: Contact): void {
    const i = this.contacts.indexOf(c);
    this.contacts.splice(i, 1);
  }

  edit(c: Contact): void {
    c.edit = !c.edit;
  }

}
