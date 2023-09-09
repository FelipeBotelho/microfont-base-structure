import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../projects/auth/src/lib/is-logged.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'

  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'authentication',
    loadChildren: () => import('@@login').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
