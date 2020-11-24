import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ContactService} from '../../services/contact.service';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit {

  private searchTerms$ = new Subject<string>();

  constructor(private service: ContactService) {
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms$.next(term);
  }

  ngOnInit(): void {
    this.searchTerms$.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // now execute the search
      map((term: string) => this.service.search(term)),
    ).subscribe();
  }
}
