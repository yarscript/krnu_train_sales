import { Injectable }                 from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

import { LocalStorageService }                   from "@/modules/core/local-storage/local-storage.service";
import { ConfigService as RequestConfigService } from '@/modules/http/http.module';

import * as fromUser from '@/modules/app/modules/user/reducers';
import { UserState } from "@/modules/app/modules/user/interfaces/user-state.interface";
import { AuthState } from "@/modules/auth/interfaces/auth-state.interface";


export const AUTH_KEY = 'AUTH';


@Injectable({
  providedIn: "root"
})
export class UserApiService
{
  protected httpOptions: Object

  constructor(
    protected http: HttpClient,
    private config: RequestConfigService,
    private localStorage: LocalStorageService
  ) {
    let auth = this.localStorage.getItem(AUTH_KEY);

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'XDEBUG_SESSION_START': 'PHPSTORM',
        'Authorization': auth?.auth.status?.auth.token_type + ' ' + auth?.auth.status?.auth.token
      })

    }
    const test = true;
  }

  public init(auth): Observable<UserState> {

    const response = this.http.get<UserState>(
      this.config.getConfig().url.api + '/me', this.httpOptions
    );

    console.log('RESPONSE ORGS ====>> ', response);

    return response;
  }

  public applyServicePlan(service_plan_uuid: string): Observable<any> {
    const response = this.http.patch(
      this.config.getConfig().url.api + '/user/service-plan/apply/' + service_plan_uuid, null, this.httpOptions
    );

    console.log('RESPONSE APPLY SERVICE_PLAN', response);

    return response;
  }
}
