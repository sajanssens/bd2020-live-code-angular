import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {


  constructor(private router: Router,
              private service: UserService) {
  }

  ngOnInit(): void {
    this.service.logout();
    this.router.navigate(['/login']);
  }

}
