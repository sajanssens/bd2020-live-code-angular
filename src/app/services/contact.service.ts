import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';

@Injectable({ providedIn: 'root' })
export class ContactService {

  private url = 'http://localhost:9688/contacts';

  // Class --> object
  contactList: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
  ];

  constructor(private http: HttpClient) {

  }

  getAll(): Contact[] {
    // this.http.get<Contact[]>(this.url).subscribe(contacts => this.printContacts(contacts));
    return this.contactList;
  }

  add(c: Contact): void {
    this.contactList.push(c);
  }

  printContacts(c: Contact[]): void {
    console.log(c);
  }
}
