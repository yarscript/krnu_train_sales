import { Injectable }                 from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

import { LocalStorageService }                   from "@/modules/core/local-storage/local-storage.service";
import {
  Storage,
}                                                from "@/modules/app/modules/storages/interfaces/storage-state.interface";
import { ConfigService as RequestConfigService } from '@/modules/http/http.module';

import * as fromAuthEffects  from '@/modules/auth/effects'
import { ResponseInterface } from "@/modules/http/request/interfaces/response.interface";


// TODO['removeDebug'] = 'remove debug header'


@Injectable({
  providedIn: "root"
})
export class StorageService
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
  // [Storage/Api] Init
  init(): Observable<ResponseInterface> {
    const response = this.http.get<ResponseInterface>(
      this.config.getConfig().url.api + '/storage', this.httpHeaders
    );

    console.log('Storage INIT RESPONSE', response)

    return response;
  }

  create(storageData : Storage): Observable<any> {
    const response = this.http.post<Storage>(
      this.config.getConfig().url.api + '/storage/create',  storageData, this.httpHeaders
    );

    console.log('Storage DATA ====>> ', storageData);

    return response;
  }
}
