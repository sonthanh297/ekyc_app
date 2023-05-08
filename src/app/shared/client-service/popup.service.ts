import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PopupService {
  private alertSubject = new Subject<string>();
  alert$ = this.alertSubject.asObservable();

  showAlertMessage(message: string) {
    this.alertSubject.next(message);
  }
}
