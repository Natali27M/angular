import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from './modules/auth';
import { IToken } from './modules/auth/interfaces';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  isRefreshing = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const isAuthenticated = this.authService.isAuthorization();

    if (isAuthenticated) {
      request = this.addToken(request, this.authService.getAccessToken());
    }

    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) =>{

        if(res && res.error && res.status === 401) {
          return this.handler401Error(request, next);
        }

        return throwError(() => new Error(('Token invalid or expired')))
      })
    ) as any;
  }

  addToken(request: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
    return request.clone({
      setHeaders: { Authorization: `Bearer ${ token }`}
    })
  }

  handler401Error(request: HttpRequest<unknown>, next: HttpHandler): any {
    if(!this.isRefreshing) {
      this.isRefreshing = true;

      return this.authService.refresh().pipe(
        switchMap((tokens: IToken) =>{
          return next.handle(this.addToken(request, tokens.access));
        }),

        catchError(() => {
          this.isRefreshing = false;
          this.authService.deleteToken();
          this.router.navigate(['login']).then();
          return throwError(() => new Error(('Token invalid or expired')))
        })
      )
    }

  }

}
