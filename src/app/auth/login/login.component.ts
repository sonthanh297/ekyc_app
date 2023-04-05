import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

import { User } from '../model/user.model';
import { AuthService } from '../service/auth.service';
import { ValidationService } from '../service/validation.service';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {


}
