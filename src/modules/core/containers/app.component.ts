import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store }                      from '@ngrx/store';
import { Observable }                         from 'rxjs';
import { Router }                             from '@angular/router';

import { RoutesConfig } from '@/config/routes.config';

import { AuthActions }         from '@/modules/auth/actions';
import * as fromAuth           from '@/modules/auth/reducers';
import * as fromRoot           from '@/modules/app/reducers';
import { LayoutActions }       from '@/modules/core/actions';
import { map, mergeAll, take } from "rxjs/operators";


@Component({
  selector: 'app-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrapper">

      <header>
        <app-toolbar (toggleMenu)="toggleSidenav()">
          <span>Time Tracker Web</span>
          <button
            mat-raised-button
            color="accent"
            routerLink="/user"
          >User Profile</button>

          <mat-menu #menu="matMenu">
            <button mat-menu-item>

              <span>Redial</span>
            </button>
            <button mat-menu-item disabled>
              <mat-icon>voicemail</mat-icon>
              <span>Check voice mail</span>
            </button>
            <button mat-menu-item>
              <mat-icon>notifications_off</mat-icon>
              <span>Disable alerts</span>
            </button>
          </mat-menu>

        </app-toolbar>
        <mat-progress-bar [color]="'primary'" ></mat-progress-bar>
      </header>

      <app-layout class="content">
        <app-sidenav [open]="showSidenav$ | async" (closeMenu)="closeSidenav()">
          <app-nav-item
            (navigate)="closeSidenav()"
            routerLink="/home"
            icon="house"
          >Home
          </app-nav-item>

          <app-nav-item
            (navigate)="closeSidenav()"
            *ngIf="loggedIn$ | async"
            routerLink="/firms"
            icon="groups"
            hint="Manage your firms"
          >
            Firms
          </app-nav-item>

          <app-nav-item
            (navigate)="closeSidenav()"
            *ngIf="loggedIn$ | async"
            routerLink="/employees"
            icon="groups"
            hint="Manage your employees"
          >
            Employees
          </app-nav-item>
          <app-nav-item
            (navigate)="closeSidenav()"
            *ngIf="loggedIn$ | async"
            routerLink="/projects"
            icon="groups"
            hint="Manage your organisations"
          >
            Projects
          </app-nav-item>
          <app-nav-item
            (navigate)="closeSidenav()"
            *ngIf="loggedIn$ | async"
            routerLink="{{ routes.books }}"
            icon="search"
            hint="Find your next book!"
          >
            Browse Books
          </app-nav-item>
          <app-nav-item
            (navigate)="closeSidenav()"
            *ngIf="loggedIn$ | async"
            routerLink="/user/service-plan"
          >
            Service Plan
          </app-nav-item>
          <app-nav-item
            (navigate)="closeSidenav()"
            *ngIf="!(loggedIn$ | async)"
            routerLink="/login"
          >
            Sign In
          </app-nav-item>
          <app-nav-item (navigate)="logout(); closeSidenav()" *ngIf="loggedIn$ | async">
            Sign Out
          </app-nav-item>
        </app-sidenav>

        <main class="p-2 pt-3">
          <router-outlet></router-outlet>
        </main>
      </app-layout>

      <!-- Footer -->
      <!--      <footer class="footer">-->
      <!--        <mat-toolbar >-->
      <!--          <div class="footer-copyright text-center py-3">© 2020 Copyright:-->
      <!--            <a href="#">Sinella.com</a>-->
      <!--          </div>-->
      <!--        </mat-toolbar>-->
      <!--        <mat-toolbar>-->
      <!---->
      <!--        </mat-toolbar>-->
      <!--      </footer>-->
      <!-- Footer -->
    </div>

  `,
  styles: [
    `
    `,
  ],
})
export class AppComponent
{
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  routes = RoutesConfig.routes;

  /**
   *
   */
  constructor(
    private store: Store<fromRoot.State & fromAuth.State>,
    private router: Router
  ) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.select(fromRoot.selectShowSidenav);
    this.loggedIn$ = this.store.select(fromAuth.selectLoggedIn);
    let test = 1;
    console.log(this.routes)
  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(LayoutActions.closeSidenav());
  }

  openSidenav() {
    this.store.dispatch(LayoutActions.openSidenav());
  }

  toggleSidenav() {
    let showSidenav;

    this.showSidenav$.subscribe(sidenavState => showSidenav = !sidenavState).unsubscribe();

    this.store.dispatch(LayoutActions.toggleSidenav({ showSidenav }));
  }

  logout() {
    this.store.dispatch(AuthActions.logoutConfirmation());
  }

  // navigate(path: String) {
  //   this.store.dispatch()
  // }
}
