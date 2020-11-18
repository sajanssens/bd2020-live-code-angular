import { Component } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {

  constructor(private service: ContactService) { }

  contactAdded(c: Contact): void {
    this.service.add(c);
  }

  getContacts(): Contact[] {
    return this.service.getAll();
  }

}
