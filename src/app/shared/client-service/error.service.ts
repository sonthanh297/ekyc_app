import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { CommonMessages } from '../data/common-messages.data';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  getErrorMessage(error: HttpErrorResponse): string {
    return error.error ? error.error.message : CommonMessages.UnknownError;
  }

  handleError(error: ErrorEvent | HttpErrorResponse) {
    return throwError(() => error)
  }
}
