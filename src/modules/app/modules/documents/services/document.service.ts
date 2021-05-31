import { Injectable }                 from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

import { LocalStorageService }                   from "@/modules/core/local-storage/local-storage.service";
import {
  Document,
}                                                from "@/modules/app/modules/documents/interfaces/document-state.interface";
import { ConfigService as RequestConfigService } from '@/modules/http/http.module';

import * as fromAuthEffects  from '@/modules/auth/effects'
import { ResponseInterface } from "@/modules/http/request/interfaces/response.interface";


// TODO['removeDebug'] = 'remove debug header'


@Injectable({
  providedIn: "root"
})
export class DocumentService
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
  // [Document/Api] Init
  init(): Observable<ResponseInterface> {
    const response = this.http.get<ResponseInterface>(
      this.config.getConfig().url.api + '/document', this.httpHeaders
    );

    console.log('Document INIT RESPONSE', response)

    return response;
  }

  create(documentData : Document): Observable<any> {
    const response = this.http.post<Document>(
      this.config.getConfig().url.api + '/document/create',  documentData, this.httpHeaders
    );

    console.log('Document DATA ====>> ', documentData);

    return response;
  }
}
