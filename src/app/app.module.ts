import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PwdForgotComponent } from './components/pwd-forgot/pwd-forgot.component';
import { UserService } from './services/user.service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { PwdResetComponent } from './components/pwd-reset/pwd-reset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { IconsComponent } from './components/icons/icons.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteService } from './services/note.service/note.service';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { TrashiconsComponent } from './components/trashicons/trashicons.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PwdForgotComponent,
    PwdResetComponent,
    DashboardComponent,
    ToolbarComponent,
    CreatenoteComponent,
    SearchboxComponent,
    IconsComponent,
    DisplaynotesComponent,
    NotesComponent,
    ArchiveComponent,
    TrashComponent,
    TrashiconsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RxReactiveFormsModule,
  ],
  providers: [UserService, NoteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
