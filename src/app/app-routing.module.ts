import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
  },
{
  path: 'test',
  component: TestComponent,
},
{
  path: 'login',
  component: LoginComponent,
},
{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
