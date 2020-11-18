import { Component } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { Person } from 'src/app/models/Person';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {

  // private personService: ContactService;

  constructor(private personService: ContactService) {
    // this.personService = ps;
  }

  // Interface --> JSON
  contacts: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
  ];

  personAdded(p: Person): void {
    this.personService.add(p);
  }

  getPersons(): Person[] {
    return this.personService.getAllPersons();
  }

}
