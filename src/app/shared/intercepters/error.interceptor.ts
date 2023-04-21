import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../../auth/service/authentication.service';
import { AlertService } from '../client-service/alert.service';
import { ErrorService } from '../client-service/error.service';
import { Router } from '@angular/router';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    //constructor(private authenticationService: AuthenticationService) { }

    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     return next.handle(request).pipe(catchError(err => {
    //         if ([401, 403].includes(err.status)) {
    //             // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
    //            // this.authenticationService.logout();
    //         }

    //         const error = err.error.message || err.statusText;
    //         return throwError(error);
    //     }))
    // }

  //   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //     return next.handle(request).pipe(catchError(err => {
  //         const error = err.error?.message || err.statusText;
  //         this.alertService.error(error);
  //         console.error(err);
  //         return throwError(() => error);
  //     }))
  // }

    constructor(private alertService: AlertService,
      private errorService: ErrorService,
      private router: Router
    ) { }

    isRefreshing = false;
    errorMessage: string = '';
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

      return next.handle(request).pipe(
        catchError((error: any) => {
          if (error instanceof HttpErrorResponse) {
            if (error.error instanceof ErrorEvent) {
              console.error('ErrorEvent occurred');
            } else {
              this.errorMessage = this.errorService.getErrorMessage(error);
              switch (error.status) {
                case 400:
                  this.handle400Error();
                  break;

                case 401:
                    this.handle401Error();
                  break;

                case 403:
                  this.handle403Error();
                  break;

                case 409:
                  this.handle409Error();
                  break;

                case 500:
                  this.handle500Error();
                  break;

                default:
                  break;
              }
            }
          } else {
            console.error('An unknown error occurred')
          }
          return throwError(() => error);
        })
      );
    }

    handle400Error() {
      this.alertService.error(this.errorMessage);
    }

    handle401Error() {
      this.alertService.error(this.errorMessage);
      this.router.navigate(['/login']);
    }

    handle403Error() {
      this.alertService.error(this.errorMessage);
      this.router.navigate(['/login']);
    }

    handle409Error() {
      this.alertService.error(this.errorMessage);
    }

    handle500Error() {
      let errorMessage = 'Server is not Responsible. Please try again later';
      this.alertService.error(errorMessage);
    }








}
