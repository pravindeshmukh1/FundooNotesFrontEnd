import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { PwdForgotComponent } from './components/pwd-forgot/pwd-forgot.component';
import { PwdResetComponent } from './components/pwd-reset/pwd-reset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { AuthGuard } from './guard/auth.guard';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { LabelComponent } from './components/label/label.component';
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
      { path: 'archive', component: ArchiveComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'reminder', component: ReminderComponent },
      { path: 'label', component: LabelComponent },
    ],
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
