import { Component, Input } from '@angular/core';

import { Book } from '@/modules/app/modules/books/models';

@Component({
  selector: 'app-book-authors',
  template: `
    <h5 mat-subheader>Written By:</h5>
    <span>
      {{ authors | appAddCommas }}
    </span>
  `,
  styles: [
    `
      h5 {
        margin-bottom: 5px;
      }
    `,
  ],
})
export class BookAuthorsComponent {
  @Input() book!: Book;

  get authors() {
    return this.book.volumeInfo.authors;
  }
}
