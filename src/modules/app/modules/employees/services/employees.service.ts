import { Injectable }                 from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

import { LocalStorageService }                   from "@/modules/core/local-storage/local-storage.service";
import {
  EmployeeStateInterface,
}                                                from "@/modules/app/modules/employees/interfaces/employee-state.interface";
import { ConfigService as RequestConfigService } from '@/modules/http/http.module';

import * as fromAuthEffects  from '@/modules/auth/effects'
import { ResponseInterface } from "@/modules/http/request/interfaces/response.interface";


// TODO['removeDebug'] = 'remove debug header'


@Injectable({
  providedIn: "root"
})
export class EmployeesService
{
  protected httpOptions: Object

  constructor(
    protected http: HttpClient,
    private config: RequestConfigService,
    private localStorage: LocalStorageService
  ) {
    let auth = this.localStorage.getItem(fromAuthEffects.AUTH_KEY);

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'XDEBUG_SESSION_START': 'PHPSTORM',
        'Authorization': auth.auth.status.auth.token_type + ' ' + auth.auth.status.auth.token
      })
    }
  }

  init(): Observable<ResponseInterface> {
    const response = this.http.get<ResponseInterface>(
      this.config.getConfig().url.api + '/employee', this.httpOptions
    );

    console.log('ORG INIT RESPONSE', response)

    return response;
  }

  create(employee: EmployeeStateInterface): Observable<any> {
    const response = this.http.post<EmployeeStateInterface>(
      this.config.getConfig().url.api + '/employee/create', employee, this.httpOptions
    );

    console.log('Employee request data ====>> ', employee);

    return response;
  }
}
