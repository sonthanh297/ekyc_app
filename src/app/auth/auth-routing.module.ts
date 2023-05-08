import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const authPaths = {
  base: 'auth',
  logIn: 'log-in',
  register: 'register',
  logout: 'logout',
};

export const authRoutes = {
  logIn: `/${authPaths.base}/${authPaths.logIn}`,
  register: `/${authPaths.base}/${authPaths.register}`,
  logout: `/${authPaths.base}/${authPaths.logout}`,
};

export const AUTH_ROUTES = {
  AUTH: '',
  REGISTER: 'register',
  LOGIN: 'login',
};

const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
        { path: AUTH_ROUTES.REGISTER, component: RegisterComponent },
        { path: AUTH_ROUTES.LOGIN, component: LoginComponent },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {

}
