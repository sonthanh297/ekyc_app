import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../model/user.model';
import { AuthService } from '../service/auth.service';
import { ValidationService } from '../service/validation.service';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit  {

  loginForm: FormGroup = {} as FormGroup;

  errorMessage: string = '';

  get f(): { [key: string]: AbstractControl } {
      return this.loginForm.controls;
  }

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private logger: LoggerService) { }

  ngOnInit() {
      this.buildForm();
  }

  buildForm() {
      this.loginForm = this.formBuilder.group({
          email:      ['', [ Validators.required, ValidationService.emailValidator ]],
          password:   ['', [ Validators.required, ValidationService.passwordValidator ]]
      });
  }

  submit({ value, valid }: { value: User, valid: boolean }) {
      this.authService.login(value)
          .subscribe((status: boolean) => {
              if (status) {
                  if (this.authService.redirectUrl) {
                      const redirectUrl = this.authService.redirectUrl;
                      this.authService.redirectUrl = '';
                      this.router.navigate([redirectUrl]);
                  } else {
                      this.router.navigate(['/customers']);
                  }
              } else {
                  const loginError = 'Unable to login';
                  this.errorMessage = loginError;

              }
          },
          (err: any) => this.logger.log(err));
  }
}
