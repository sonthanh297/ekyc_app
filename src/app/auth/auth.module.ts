import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    //AuthRoutingModule.components
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,AuthRoutingModule
  ]

})
export class AuthModule { }
