import { Injectable }                 from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

import { ConfigService }     from '@/modules/http/http.module';
import { AuthState }         from '../interfaces/auth-state.interface';
import { Credentials, User } from '@/modules/auth/models';


// TODO['removeDebug'] = 'remove debug header'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'XDEBUG_SESSION_START': 'PHPSTORM'
  })
}


@Injectable({
  providedIn: 'root',
})
export class AuthService
{
  constructor(
    private http: HttpClient,
    private config: ConfigService,
  ) {}

  login({ username, password }: Credentials): Observable<AuthState> {
    const auth = this.http.post<AuthState>(
      this.config.getConfig().url.api + '/login', { email: username, password }, httpOptions
    );

    console.log('SERVICE::login, auth ====>>', auth)

    return auth;
  }

  logout() {
    return of(true);
  }
}
