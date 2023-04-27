import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { TestComponent } from './modules/test/test.component';
import { UserModule } from './user/user.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { fakeBackendProvider } from './auth/service/fake-backend';
import { JwtInterceptor } from './shared/service/jwt.interceptor';
import { ErrorInterceptor } from './shared/intercepters/error.interceptor';
import { ProgressBarInterceptor } from './shared/intercepters/progress-bar.interceptor';
import { FileUploadComponent } from './modules/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ProgressBarInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
