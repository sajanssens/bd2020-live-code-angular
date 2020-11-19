import {Component} from '@angular/core';
import {Contact} from 'src/app/models/Contact';
import {ContactService} from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  contacts$ = this.service.getAll();

  constructor(private service: ContactService) {
  }

  delete(c: Contact): void {
    this.service.delete(c);
  }

  edit(c: Contact): void {
    c.edit = !c.edit;
    this.service.update(c);
  }

}
