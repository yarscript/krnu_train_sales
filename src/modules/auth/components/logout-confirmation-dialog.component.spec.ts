import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoutConfirmationDialogComponent } from '@/modules/auth/components';
import { MaterialModule }                    from '@/modules/shared/modules/material';

describe('Logout Confirmation Dialog', () => {
  let fixture: ComponentFixture<LogoutConfirmationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [LogoutConfirmationDialogComponent],
    });

    fixture = TestBed.createComponent(LogoutConfirmationDialogComponent);
  });

  it('should compile', () => {
    fixture.detectChanges();

    // expect(fixture).toMatchSnapshot();
  });
});
