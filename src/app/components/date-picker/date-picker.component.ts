import { Component } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {

  // Class --> object
  personList: Person[] = [
    new Person('Sam', 'Smith', 'sam.smith@music.com'),
    new Person('Frank', 'Muscles', 'frank@muscles.com'),
    new Person('Eddy', 'Valentino', 'eddy@valfam.co.uk')
  ];

  // Interface --> JSON
  contacts: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
  ];

  delete(p: Person): void {
    const i = this.personList.indexOf(p);
    this.personList.splice(i, 1);
  }

  edit(p: Person): void {
    p.edit = !p.edit;
  }

  personAdded(p: Person): void {
    this.personList.push(p);
  }
}
