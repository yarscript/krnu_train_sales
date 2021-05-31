import { Injectable }                 from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

import { LocalStorageService }                   from "@/modules/core/local-storage/local-storage.service";
import {
  Carriage,
}                                                from "@/modules/app/modules/carriages/interfaces/carriage-state.interface";
import { ConfigService as RequestConfigService } from '@/modules/http/http.module';

import * as fromAuthEffects  from '@/modules/auth/effects'
import { ResponseInterface } from "@/modules/http/request/interfaces/response.interface";


// TODO['removeDebug'] = 'remove debug header'


@Injectable({
  providedIn: "root"
})
export class CarriageService
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
  // [Carriage/Api] Init
  init(): Observable<ResponseInterface> {
    const response = this.http.get<ResponseInterface>(
      this.config.getConfig().url.api + '/carriage', this.httpHeaders
    );

    console.log('Carriage INIT RESPONSE', response)

    return response;
  }

  create(carriageData : Carriage): Observable<any> {
    const response = this.http.post<Carriage>(
      this.config.getConfig().url.api + '/carriage/create',  carriageData, this.httpHeaders
    );

    console.log('Carriage DATA ====>> ', carriageData);

    return response;
  }
}
