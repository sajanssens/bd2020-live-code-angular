import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';

@Injectable({ providedIn: 'root' })
export class ContactService {

  private url = 'http://localhost:9688/contacts';

  // Interface --> JSON
  contacts: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
  ];

  constructor(private http: HttpClient) {

  }

  getAll(): Contact[] {
    // this.http.get<Contact[]>(this.url) // get data from a server
    //   .subscribe(contacts => this.process(contacts)); // when received: do this.
    return this.contacts; // this isn't filled yet... :-(
  }

  add(c: Contact): void {
    this.contacts.push(c);
  }

  delete(c: Contact): void {
    // this.http.delete(`${this.url}/${c.id}`).subscribe(() => this.getAll());
    const i = this.contacts.indexOf(c);
    this.contacts.splice(i, 1);
  }

  process(c: Contact[]): void {
    console.log(c);
    // this.contacts = c;
  }
}
