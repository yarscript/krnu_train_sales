import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { SelectedBookPageActions }   from '@/modules/app/modules/books/actions';
import {
  BookAuthorsComponent,
  BookDetailComponent,
}                                    from '@/modules/app/modules/books/components';
import { SelectedBookPageComponent } from '@/modules/app/modules/books/containers/index';
import { Book, generateMockBook }    from '@/modules/app/modules/books/models';
import * as fromBooks                from '@/modules/app/modules/books/reducers';
import { AddCommasPipe }             from '@/modules/shared/pipes/add-commas.pipe';
import { MaterialModule }            from '@/modules/shared/modules/material';

describe('Selected Book Page', () => {
  let fixture: ComponentFixture<SelectedBookPageComponent>;
  let store: MockStore;
  let instance: SelectedBookPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MaterialModule],
      declarations: [
        SelectedBookPageComponent,
        BookDetailComponent,
        BookAuthorsComponent,
        AddCommasPipe,
      ],
      providers: [provideMockStore()],
    });

    fixture = TestBed.createComponent(SelectedBookPageComponent);
    instance = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    spyOn(store, 'dispatch');
  });

  it('should compile', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch a collection.AddBook action when addToCollection is called', () => {
    const $event: Book = generateMockBook();
    const action = SelectedBookPageActions.addBook({ book: $event });

    instance.addToCollection($event);

    expect(store.dispatch).toHaveBeenLastCalledWith(action);
  });

  it('should dispatch a collection.RemoveBook action on removeFromCollection', () => {
    const $event: Book = generateMockBook();
    const action = SelectedBookPageActions.removeBook({ book: $event });

    instance.removeFromCollection($event);

    expect(store.dispatch).toHaveBeenLastCalledWith(action);
  });
});
