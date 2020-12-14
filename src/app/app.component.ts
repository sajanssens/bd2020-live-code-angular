import {Component} from '@angular/core';
import {UserService} from './services/user.service';

@Component({ // decorator, meta data
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedInUsername$ = this.service.loggedInUsername$;

  loggedIn = false;
  logLabel = 'Login';
  logLink = 'login';
  loggedInUsername: string;


  constructor(private service: UserService) {
    this.loggedInUsername$.subscribe((u) => {
      this.loggedIn = true;
      this.logLabel = 'Logout';
      this.logLink = 'logout';
      this.loggedInUsername = u;
    });
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
