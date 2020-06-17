import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { PwdForgotComponent } from './components/pwd-forgot/pwd-forgot.component';
import { PwdResetComponent } from './components/pwd-reset/pwd-reset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/dashboard/notes/notes.component';
import { AuthGuard } from './guard/auth.guard';
import { DisplaynotesComponent } from './components/dashboard/displaynotes/displaynotes.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forgotpassword',
    component: PwdForgotComponent,
  },
  {
    path: 'resetpassword/:token',
    component: PwdResetComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: NotesComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'getAllNotes', component: DisplaynotesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
