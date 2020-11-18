import { Injectable } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Injectable({providedIn: 'root' })
export class ContactService {

  // Class --> object
  personList: Person[] = [
    new Person('Sam', 'Smith', 'sam.smith@music.com'),
    new Person('Frank', 'Muscles', 'frank@muscles.com'),
    new Person('Eddy', 'Valentino', 'eddy@valfam.co.uk')
  ];

  constructor() { }

  getAllPersons(): Person[] {
    return this.personList;
  }

  add(p: Person): void {
    this.personList.push(p);
  }
}
