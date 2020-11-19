import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Contact} from '../models/Contact';
import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ContactService {

  private url = 'http://localhost:9688/contacts';

  contactsUpdated$ = new Subject<Contact[]>(); // event, can contain Contact[]

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Contact[]> {
    this.http.get<Contact[]>(this.url) // get contacts from server
      .subscribe(  // when the results arrive (some time in the future):
        // rise the contactsUpdated event and supply  the contacts
        contacts => this.contactsUpdated$.next(contacts)
      );

    // we're using a custom subject here so when adding, editing or
    // deleting contacts, we can use this same observable to notify subscribers
    // of changes.
    return this.contactsUpdated$;
  }

  add(c: Contact): void {
    this.http.post<Contact[]>(this.url, c) // post contact to server
      .subscribe(() => this.getAll());  // when posted: getAll (refresh)
  }

  update(c: Contact): void {
    this.http.put<Contact[]>(`${this.url}/${c.id}`, c) // put contact to server
      .subscribe(() => this.getAll());  // when posted: getAll (refresh)
  }

  delete(c: Contact): void {
    this.http.delete(`${this.url}/${c.id}`) // delete contact from server
      .subscribe(() => this.getAll()); // when deleted: getAll (refresh)
  }

}

