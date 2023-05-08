import { Component } from '@angular/core';
import { User } from './auth/model/user.model';
import { AuthenticationService } from './auth/service/authentication.service';
import { AlertService } from './shared/client-service/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  title = 'ekyc_app';

  user?: User | null;

    constructor(private authenticationService: AuthenticationService,private alertService : AlertService) {
        this.authenticationService.user.subscribe(x => this.user = x);
        this.alertService.error("sdgsgd");
    }

    logout() {
        this.authenticationService.logout();
    }
}
