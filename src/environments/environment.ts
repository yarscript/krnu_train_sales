// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  appName: 'Time Tracker Web',
  envName: 'DEV',
  test: false,
  production: false,
  i18nPrefix: '',
  application:
    {
      name: 'angular-starter',
      angular: 'Angular 11.2.0',
      fontawesome: 'Font Awesome 5.15.2',
    },
  url: 'http://localhost:4200',
  config: {
    /* SELECT ONE OF THOSE CONFIGURATIONS */

    /* LOCAL JSON (NO CRUD) */
    // api: true,
    // url: './assets/params/json/crud/',

    /* LOCAL REST API CRUD WITH POSTGRESQL */
    api: true,
    url: 'http://time.tracker',
    api_url: 'http://train-sales.local/api/v1'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

//
// export const environment = {
//   appName: 'Angular Ngrx Material Starter',
//   envName: 'DEV',
//   production: false,
//   test: false,
//   i18nPrefix: '',
//   versions: {
//     app: packageJson.version,
//     angular: packageJson.dependencies['@angular/core'],
//     ngrx: packageJson.dependencies['@ngrx/store'],
//     material: packageJson.dependencies['@angular/material'],
//     bootstrap: packageJson.dependencies.bootstrap,
//     rxjs: packageJson.dependencies.rxjs,
//     ngxtranslate: packageJson.dependencies['@ngx-translate/core'],
//     fontAwesome: packageJson.dependencies['@fortawesome/fontawesome-free'],
//     angularCli: packageJson.devDependencies['@angular/cli'],
//     typescript: packageJson.devDependencies['typescript'],
//     cypress: packageJson.devDependencies['cypress'],
//     eslint: packageJson.devDependencies['eslint']
//   }
// };
