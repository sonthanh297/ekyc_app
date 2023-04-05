import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TestComponent } from './test/test.component';
import { UserModule } from './user/user.module';

const authModule = () => import('./auth/auth.module').then(x => x.AuthModule);

const routes: Routes = [

{
  path: 'test',
  component: TestComponent,
},
{
  path: 'login',
  component: LoginComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
