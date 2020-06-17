import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private route: Router
  ) {}

  Email = new FormControl('', [Validators.email, Validators.required]);
  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.maxLength(15),
    Validators.required,
  ]);

  getEmailErrorMessage() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }

  getPasswordErrorMessage() {
    return this.Password.hasError('required')
      ? 'Password is Required '
      : 'Password should be minimum of 8 characters';
  }

  onLogin() {
    let userData = {
      email: this.Email.value,
      password: this.Password.value,
      service: 'Basic',
    };
    this.userService.login(userData).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.id);
        this.snackBar.open('User Login Sucessfully', '', {
          duration: 2000,
        });
        this.route.navigate(['/dashboard']);
      },
      (err) => {
        this.snackBar.open('please enter valid email and password', '', {
          duration: 4000,
        });
      }
    );
  }
  ngOnInit(): void {}
}
