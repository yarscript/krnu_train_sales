import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="toggleMenu.emit()" aria-label="menu">
        <mat-icon>menu</mat-icon>
      </button>
      <ng-content></ng-content>
    </mat-toolbar>
  `,
})
export class ToolbarComponent {
  @Output() toggleMenu = new EventEmitter();
}
