import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {serverUrl} from '../../environments/environment';
import {User} from '../models/User';

@Injectable({providedIn: 'root'})
export class UserService {

  private uri = serverUrl + '/users';
  loggedInUser: User;

  loggedIn$ = new Subject<string>();
  loggedOut$ = new Subject<string>();

  message$ = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  login(u: User): void {
    this.http.post<User>(`${this.uri}/login`, u)
      .subscribe(
        data => {
          this.loggedInUser = data;
          this.loggedIn$.next(this.loggedInUser.username);
          this.message$.next(`Gebruiker ${data.username} is ingelogd.`);
          localStorage.setItem('loggedInUser', JSON.stringify(data));
        },
        error => {
          console.log(error);
          this.message$.next(`Inloggen is mislukt.  Reden: ${error.statusText}.`);
        }
      );
  }

  logout(): void {
    this.loggedInUser = null;
    this.loggedOut$.next();
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

