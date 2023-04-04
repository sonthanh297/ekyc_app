import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    //AuthRoutingModule.components
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
  ]
})
export class AuthModule { }
