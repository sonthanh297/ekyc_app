import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TestComponent } from './test/test.component';
import { UserModule } from './user/user.module';

const authModule = () => import('./auth/auth.module').then(x => x.AuthModule);

const routes: Routes = [
{ path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
{
  path: 'test',
  component: TestComponent,
},
{  path: 'admin', loadChildren: authModule
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
