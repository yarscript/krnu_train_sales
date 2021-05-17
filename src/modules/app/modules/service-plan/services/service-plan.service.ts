import { Injectable } from '@angular/core';

import * as fromUser                             from '@/modules/app/modules/user/reducers';
import { UserActions }                           from '@/modules/app/modules/user/actions'
import { Store }                                 from "@ngrx/store";
import { Observable }                            from "rxjs";
import { UserState }                             from "@/modules/app/modules/user/interfaces/user-state.interface";
import { HttpClient, HttpHeaders }               from "@angular/common/http";
import { ConfigService as RequestConfigService } from "@/modules/http/request/config/config.service";
import { LocalStorageService }                   from "@/modules/core/local-storage/local-storage.service";
import * as fromAuthEffects from "@/modules/auth/effects";
import { ServicePlan } from "@/modules/app/modules/service-plan/interfaces/service-plan.interface";


@Injectable({
  providedIn: "root"
})
export class ServicePlanService
{
  protected httpOptions: Object

  constructor(
    private store: Store<fromUser.State>,
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

  loadList(): Observable<any> {
    const response = this.http.get<ServicePlan[]>(
      this.config.getConfig().url.api + '/service-plan', this.httpOptions
    );

    console.log('RESPONSE ORGS ====>> ', response);

    return response;
  }
}
