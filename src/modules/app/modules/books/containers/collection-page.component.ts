import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CollectionPageActions } from '@/modules/app/modules/books/actions';
import { Book }                  from '@/modules/app/modules/books/models';
import * as fromBooks            from '@/modules/app/modules/books/reducers';

@Component({
  selector: 'app-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card>
      <mat-card-title>My Collection</mat-card-title>
    </mat-card>

    <app-book-preview-list [books]="books$ | async"></app-book-preview-list>
  `,
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational
   * components.
   */
  styles: [
    `
      mat-card-title {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class CollectionPageComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store<fromBooks.State>) {
    this.books$ = store.select(fromBooks.selectBookCollection);
  }

  ngOnInit() {
    this.store.dispatch(CollectionPageActions.enter());
  }
}
