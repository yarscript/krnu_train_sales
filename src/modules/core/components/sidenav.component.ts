import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <mat-sidenav
      #sidenav
      mode="over"
      [opened]="open"
      (keydown.escape)="sidenav.close()"
      (closedStart)="closeMenu.emit()"
    >
      <mat-nav-list>
        <ng-content></ng-content>
      </mat-nav-list>
    </mat-sidenav>
  `,
  styles: [
    `
      mat-sidenav {
        width: 300px;
        height: 100%;
      }
    `,
  ],
})
export class SidenavComponent {
  @Input() open = false;
  @Output() closeMenu = new EventEmitter();
}
