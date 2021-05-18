import { InjectionToken } from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
  heroes: 'heroes'
};

const routesNames = {
  home: 'home',
  error404: '404',
  login: 'login',
  books: 'books',
  firms: 'firms',
  employees: 'employees',
  projects: 'projects',
  user: 'user',

  // heroes: {
  //   basePath: basePaths.heroes
  // }
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${ routesNames.home }`,
    error404: `/${ routesNames.error404 }`,
    login: `/${ routesNames.login }`,
    books: `/${ routesNames.books }`,
    firms: `/${ routesNames.firms }`,
    employees: `/${ routesNames.employees }`,
    projects: `/${ routesNames.projects }`,
    user: `/${ routesNames.user }`
    // heroes: {
    //   detail: getHeroDetail
    // }
  }
};

// export function getHeroDetail(id) {
//   return `/${basePaths.heroes}/${id}`;
// }
