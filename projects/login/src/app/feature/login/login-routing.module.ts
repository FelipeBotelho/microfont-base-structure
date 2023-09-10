import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';

const routes: Routes = [
  { path: 'sign-in', component: LoginComponent },

  {
    path: 'register-user',
    component: SignUpComponent,
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'verify-email-address',
    component: VerifyEmailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule { }
