import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({ providedIn: 'root' })
export class UtilitiesService {

    constructor(@Inject('Window') private window: Window) { }

    getApiUrl() {
        const port = this.getPort();
        // if (process.env.NG_APP_API_URL) {
        //     return process.env.NG_APP_API_URL;
        // }
        return `${this.window.location.protocol}//${this.window.location.hostname}${port}`;
    }

    private getPort() {
        const port = this.window.location.port;
        if (port) {
            // for running with Azure Functions local emulator
            if (port === '4200') {
                // Local run with 'npm run' also started in api folder for Azure Functions
                return ':7071'; // for debugging Azure Functions locally
            }
            // Running with local node (which serves Angular and the API)
            return ':' + this.window.location.port;
        }
        else {
            // for running locally with Docker/Kubernetes
            if (this.window.location.hostname === 'localhost') {
                return ':8080';
            }
        }
        return '';
    }

    handleError(error: HttpErrorResponse) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return throwError(() => errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return throwError(() => error || 'Node.js server error');
  }
}
