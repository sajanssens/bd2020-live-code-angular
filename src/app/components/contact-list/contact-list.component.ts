import { Component, Input } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  @Input() persons: Person[];

  delete(p: Person): void {
    const i = this.persons.indexOf(p);
    this.persons.splice(i, 1);
  }

  edit(p: Person): void {
    p.edit = !p.edit;
  }

}
