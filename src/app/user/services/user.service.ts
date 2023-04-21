import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import { environment } from 'src/environments/environment';
import { IbankUser } from 'src/app/auth/model/user.model';
import { UtilitiesService } from 'src/app/auth/service/utilities.service';


@Injectable({ providedIn: 'root' })
export class UserService {

    userBaseUrl = environment.apiUrl + '/api/customers';

    private userIbankSubject: BehaviorSubject<IbankUser | null>;
    public userIbank: Observable<IbankUser | null>;

    constructor(
        private http: HttpClient
    ) {
        this.userIbankSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('ibankuser')!));
        this.userIbank = this.userIbankSubject.asObservable();
    }

    public get userValue() {
        return this.userIbankSubject.value;
    }

    getCustomers() {
      return this.http.get<IbankUser>(this.userBaseUrl)
          .pipe(
              map(customers => {
                  //this.calculateCustomersOrderTotal(customers);
                 // return customers;
                 this.userIbankSubject.next(customers);
              }),
              //catchError(this.utilitiesService.handleError)
          );
    }


}
