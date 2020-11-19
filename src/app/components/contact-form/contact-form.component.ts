import { Component } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  newContact = {} as Contact;

  constructor(private service: ContactService) { }

  addContact(): void {
    this.service.add(this.newContact);
    this.newContact = {} as Contact;
  }

}
