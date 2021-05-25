import { Injectable }                                 from '@angular/core';
import { Router }                                     from '@angular/router';
import { Actions, ofType, createEffect, Effect }      from '@ngrx/effects';
import { of, EMPTY }                                  from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';

import {
    EmployeeApiActions,
    EmployeeCreatePageActions,
    EmployeeActions
}                                 from '@/modules/app/modules/employees/actions'
import { EmployeeStateInterface } from "@/modules/app/modules/employees/interfaces/employee-state.interface";
import { EmployeesService }       from "@/modules/app/modules/employees/services/employees.service";
import { LocalStorageService }    from "@/modules/core/local-storage/local-storage.service";


const ORGANISATIONS_KEY = 'ORGANISATIONS';

@Injectable()
export class EmployeeEffects
{
    constructor(
        private router: Router,
        private actions$: Actions,
        private employeesService$: EmployeesService,
        private localStorageService$: LocalStorageService,
    ) {}

    init$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(EmployeeApiActions.init),
                exhaustMap(() => {
                    return this.employeesService$.init().pipe(
                        map(response => EmployeeApiActions.initSuccess({ employees: response.data }))
                    )
                })
            )
        }
    );

    create$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EmployeeCreatePageActions.create),
            map(action => action.employee),
            exhaustMap((employee: EmployeeStateInterface) => {
                return this.employeesService$.create(employee).pipe(
                    map(response => {
                        this.router.navigate([ '/employees' ]).then();
                        return EmployeeApiActions.createSuccess({ employee: response.data });
                    }),
                    catchError(err => {
                        return of(EmployeeApiActions.createFailure(err));
                    })
                )
            })
        )
    });

    // createSuccess$ = createEffect(() => {
    //   return this.actions$.pipe(
    //     ofType(OrganisationApiActions.createSuccess),
    //     tap(() => {
    //       return this.router.navigate([ '/firms' ])
    //     })
    //   )
    // });

    // createFailure$ = createEffect(() => {
    //   return this.actions$.pipe(
    //     ofType(OrganisationApiActions.createFailure),
    //
    //   )
    // });


}
