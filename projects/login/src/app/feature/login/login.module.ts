import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';

const MATERIAL_MODULES = [MatCardModule, MatFormFieldModule, MatButtonModule, MatInputModule];

@NgModule({
  declarations: [LoginComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    VerifyEmailComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule,ReactiveFormsModule, ...MATERIAL_MODULES],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class LoginModule { }
