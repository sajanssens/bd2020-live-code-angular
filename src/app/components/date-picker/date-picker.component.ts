import { Component } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {

  constructor(private personService: ContactService) {
  }
  
  personAdded(p: Person): void {
    this.personService.add(p);
  }

  getPersons(): Person[] {
    return this.personService.getAllPersons();
  }

}
