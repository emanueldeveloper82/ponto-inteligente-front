import { LogarComponent } from './login/components/logar.component';
import { LoginComponent } from './login/components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


export const LoginRoutes: Routes = [
  {
    path: 'login',
    component: LogarComponent,
    children: [{path: '', component: LoginComponent}]
  }
];


@NgModule({
  imports: [RouterModule.forChild(LoginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
