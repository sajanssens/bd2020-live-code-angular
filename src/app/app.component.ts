import { Component } from '@angular/core';
import {Contact} from './models/contact';
import {Person} from './models/Person';

@Component({ // decorator, meta data
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newContact = {} as Contact;

  persons: Person[] = [    
    new Person("Bram", "Janssens", "")
  ]

  contacts: Contact[] = [    
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
  ];

  addContact(){
    this.contacts.push(this.newContact);
		this.newContact = {} as Contact;
  }
}
