import { Injectable }                 from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

import { LocalStorageService }                   from "@/modules/core/local-storage/local-storage.service";
import {
  Storage,
}                                                from "@/modules/app/modules/storages/interfaces/storage-state.interface";
import { ConfigService as RequestConfigService } from '@/modules/http/http.module';

import * as fromAuthEffects from '@/modules/auth/effects'


// TODO['removeDebug'] = 'remove debug header'


@Injectable({
  providedIn: "root"
})
export class StorageService
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

  init(): Observable<Storage[]> {
    const response = this.http.get<Storage[]>(
      this.config.getConfig().url.api + '/organisation', this.httpOptions
    );

    console.log('ORG INIT RESPONSE', response)

    return response;
  }

  create({ name }: Storage): Observable<any> {
    const response = this.http.post<Storage>(
      this.config.getConfig().url.api + '/organisation/create', { name }, this.httpOptions
    );

    console.log('RESPONSE ORGS ====>> ', response);

    return response;
  }
}
