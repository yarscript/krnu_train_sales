import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesConfig }         from '@/config/routes.config';

import { AuthGuard }             from '@/modules/auth/services';
import { NotFoundPageComponent } from '@/modules/core/containers';

const routesNames = RoutesConfig.routesNames;


export const routes: Routes = [
  {
    path: '',
    redirectTo: routesNames.login,
    pathMatch: 'full'
  },
  // { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: routesNames.home,
    loadChildren: () => import('@/modules/shared/components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: routesNames.login,
    loadChildren: () => import('@/modules/auth').then((m) => m.AuthModule)
  },
  {
    path: routesNames.organizations,
    loadChildren: () =>
      import('@/modules/app/modules/organisations/organisations.module').then((m) => m.OrganisationsModule),
    canActivate: [ AuthGuard ],
  },
  {
    path: routesNames.projects,
    loadChildren: () => import('@/modules/app/modules/projects/projects.module').then((m) => m.ProjectsModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: routesNames.user,
    loadChildren: () => import('@/modules/app/modules/user').then((m) => m.UserModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: { title: 'Not found' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule
{
}
