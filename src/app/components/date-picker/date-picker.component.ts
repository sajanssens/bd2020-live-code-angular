import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { Person } from 'src/app/models/Person';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  
  newContact = new Person();

  // Class --> object
  persons: Person[] = [
    new Person('Sam', 'Smith', 'sam.smith@music.com'),
    new Person('Frank', 'Muscles', 'frank@muscles.com'),
    new Person('Eddy', 'Valentino', 'eddy@valfam.co.uk')
  ]

  // Interface --> JSON
  contacts: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
  ];

  addContact() {
    // this.contacts.push(this.newContact);
    this.persons.push(this.newContact);
    this.newContact = new Person();
  }
}
