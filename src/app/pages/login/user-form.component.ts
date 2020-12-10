import {Component} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user = {} as User;
  message$ = this.service.message$;

  constructor(private service: UserService) {
  }

  login(): void {
    this.service.login(this.user);
    this.user = {} as User;
  }

}
