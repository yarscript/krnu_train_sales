import { Injectable }                 from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

import { LocalStorageService }                   from "@/modules/core/local-storage/local-storage.service";
import {
  Firm,
}                                                from "@/modules/app/modules/firms/interfaces/firm-state.interface";
import { ConfigService as RequestConfigService } from '@/modules/http/http.module';

import * as fromAuthEffects from '@/modules/auth/effects'


// TODO['removeDebug'] = 'remove debug header'


@Injectable({
  providedIn: "root"
})
export class FirmService
{
  protected httpHeaders: Object

  constructor(
    protected http: HttpClient,
    private config: RequestConfigService,
    private localStorage: LocalStorageService
  ) {
    let auth = this.localStorage.getItem(fromAuthEffects.AUTH_KEY);

    this.httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'XDEBUG_SESSION_START': 'PHPSTORM',
        'Authorization': auth.auth.status.auth.token_type + ' ' + auth.auth.status.auth.token
      })
    }
  }
  // [Firm/Api] Init
  init(): Observable<Firm[]> {
    const response = this.http.get<Firm[]>(
      this.config.getConfig().url.api + '/firm', this.httpHeaders
    );

    console.log('ORG INIT RESPONSE', response)

    return response;
  }

  create(firmData : Firm): Observable<any> {
    const response = this.http.post<Firm>(
      this.config.getConfig().url.api + '/firm/create',  firmData, this.httpHeaders
    );

    console.log('FIRM DATA ====>> ', firmData);

    return response;
  }
}
