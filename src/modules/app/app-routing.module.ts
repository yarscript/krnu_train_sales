import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesConfig }         from '@/config/routes.config';

import { AuthGuard }             from '@/modules/auth/services';
import { NotFoundPageComponent } from '@/modules/core/containers';

const routesNames = RoutesConfig.routesNames;


export const routes: Routes = [
    {
        path      : '',
        redirectTo: routesNames.login,
        pathMatch : 'full'
    },
    // { path: '', redirectTo: '/books', pathMatch: 'full' },
    {
        path        : routesNames.home,
        loadChildren: () => import('@/modules/shared/components/home/home.module').then((m) => m.HomeModule),
    },
    {
        path        : routesNames.login,
        loadChildren: () => import('@/modules/auth').then((m) => m.AuthModule)
    },
    {
        path        : routesNames.firms,
        loadChildren: () => import('@/modules/app/modules/firms/firms.module').then((m) => m.FirmsModule),
        canActivate : [ AuthGuard ],
    },
    {
        path        : routesNames.employees,
        loadChildren: () => import('@/modules/app/modules/employees/employees.module').then((m) => m.EmployeesModule),
    },
    // {
    //     path        : routesNames.deals,
    //     loadChildren: () => import('@/modules/app/modules/deals/deals.module').then((m) => m.DealsModule),
    // },
    // {
    //     path: routesNames.carriages,
    //     loadChildren: () => import('@/modules/app/modules/carriages/carriages.module').then(m => m.CarriagesModule),
    // },
    // {
    //     path: routesNames.documents,
    //     loadChildren: () => import('@/modules/app/modules/documents/documents.module').then(m => m.DocumentsModule),
    // },
    // {
    //     path: routesNames.storages,
    //     loadChildren: () => import('@/modules/app/modules/storages/storages.module').then(m => m.StoragesModule),
    // },
    // {
    //     path        : routesNames.projects,
    //     loadChildren: () => import('@/modules/app/modules/projects/projects.module').then((m) => m.ProjectsModule),
    //     canActivate : [ AuthGuard ]
    // },
    {
        path        : routesNames.user,
        loadChildren: () => import('@/modules/app/modules/user').then((m) => m.UserModule),
        canActivate : [ AuthGuard ]
    },
    {
        path     : '**',
        component: NotFoundPageComponent,
        data     : { title: 'Not found' },
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash               : true,
            initialNavigation     : 'enabled',
            relativeLinkResolution: 'legacy',
        }),
    ],
    exports: [ RouterModule ],
})
export class AppRoutingModule
{
}
