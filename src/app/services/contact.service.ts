import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Contact} from '../models/Contact';
import {Observable, of, Subject} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {serverUrl} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class ContactService {

  uri = serverUrl + '/contacts';

  // tslint:disable-next-line:variable-name
  _contactsUpdated$ = new Subject<Contact[]>(); // event, can contain Contact[]

  constructor(private http: HttpClient) {
  }

  get contactsUpdated$(): Subject<Contact[]> {
    return this._contactsUpdated$;
  }


  getAll(): Observable<Contact[]> {
    this.http.get<Contact[]>(this.uri) // get contacts from server
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
    this.http.post<Contact>(this.uri, c) // post contact to server
      .subscribe(() => this.getAll());  // when posted: getAll (refresh)
  }

  update(c: Contact): void {
    this.http.put<Contact[]>(`${this.uri}/${c.id}`, c) // put contact to server
      .subscribe(() => this.getAll());  // when posted: getAll (refresh)
  }

  delete(c: Contact): void {
    this.http.delete(`${this.uri}/${c.id}`) // delete contact from server
      .subscribe(() => this.getAll()); // when deleted: getAll (refresh)
  }

  search(term: string): void {
    // return !term.trim() ?
    //   of([]) :
    const trimmedTerm = term.trim();
    this.http.get<Contact[]>(`${this.uri}/?q=${trimmedTerm}`)
      .pipe(
        // Apply two operations on the result before returning:
        // 1) peak array and log appropriately
        tap(x => x.length ?
          console.log(`found contacts matching "${trimmedTerm}"`) :
          console.log(`no contacts matching "${trimmedTerm}"`)),
        // 2) handle errors if there are any
        catchError(this.handleError<Contact[]>('search', []))
      )
      .subscribe(contacts => this.contactsUpdated$.next(contacts));
  }

  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(`${operation} failed: ${error.message}`); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }
}

