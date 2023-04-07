import { Component } from '@angular/core';
import { User } from './auth/model/user.model';
import { AuthenticationService } from './auth/service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  title = 'ekyc_app';

  user?: User | null;

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.authenticationService.logout();
    }
}
