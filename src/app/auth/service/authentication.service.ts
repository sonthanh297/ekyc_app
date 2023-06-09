import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IbankUser, User } from '../model/user.model';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    private userIbankSubject: BehaviorSubject<IbankUser | null>;
    public userIbank: Observable<IbankUser | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();

        this.userIbankSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('ibankuser')!));
        this.userIbank = this.userIbankSubject.asObservable();
        
        this.login("","");
        
    }

    public get userValue() {
        return this.userSubject.value;
    }

  login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
  }


  registerIbank(username: string, phone: string, email: string,isLegal: string,companyName: string,mst: string,kd: string) {
    return this.http.post<any>(`${environment.apiUrl}/ibankuser`, { username, phone,email,isLegal,companyName,mst,kd })
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('ibankuser', JSON.stringify(user));
              this.userSubject.next(user);
              return user;
      }));
  }

  logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
  }
}
