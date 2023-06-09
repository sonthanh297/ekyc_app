import { Injectable, Output, EventEmitter, Inject, Directive } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../model/user.model';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//   private apiUrl = 'https://api.example.com';

//   constructor(private http: HttpClient) { }

//   login(email: string, password: string) {
//     return this.http.post(`${this.apiUrl}/login`, { email, password }).subscribe(
//       res => {
//         // Handle successful login
//       },
//       err => {
//         // Handle failed login
//       }
//     );
//   }

//   logout() {
//     return this.http.post(`${this.apiUrl}/logout`, {}).subscribe(
//       res => {
//         // Handle successful logout
//       },
//       err => {
//         // Handle failed logout
//       });
// }

baseUrl = this.utilitiesService.getApiUrl();
authUrl = this.baseUrl + '/api/auth';
isAuthenticated = false;
redirectUrl: string = '';
@Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

constructor(private http: HttpClient, private utilitiesService: UtilitiesService) {  }

private userAuthChanged(status: boolean) {
   this.authChanged.emit(status); // Raise changed event
}

login(userLogin: User): Observable<boolean> {
    return this.http.post<boolean>(this.authUrl + '/login', userLogin)
        .pipe(
            map(loggedIn => {
                this.isAuthenticated = loggedIn;
                this.userAuthChanged(loggedIn);
                return loggedIn;
            }),
            catchError(this.handleError)
        );
}

logout(): Observable<boolean> {
    return this.http.post<boolean>(this.authUrl + '/logout', null)
        .pipe(
            map(loggedOut => {
                this.isAuthenticated = !loggedOut;
                this.userAuthChanged(!loggedOut); // Return loggedIn status
                return loggedOut;
            }),
            catchError(this.handleError)
        );
}

private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(() => errMessage);
      // return Observable.throw(err.text() || 'backend server error');
    }
    return throwError(() => error || 'Server error');
}


}
