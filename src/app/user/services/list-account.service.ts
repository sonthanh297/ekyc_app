import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/shared/service/base.service';
import { User } from 'src/app/auth/model/user.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ListAccountService extends BaseService<User> {

  constructor(http: HttpClient) {
    super(http);
    this.baseUrl = environment.apiUrl + '/api/listcustomers';
  }
}
