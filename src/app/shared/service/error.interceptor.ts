import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../../auth/service/authentication.service';
import { AlertService } from './alert.service';



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

    constructor(private alertService: AlertService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            const error = err.error?.message || err.statusText;
            this.alertService.error(error);
            console.error(err);
            return throwError(() => error);
        }))
    }
}
