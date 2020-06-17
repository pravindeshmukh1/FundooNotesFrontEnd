import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private route: Router, private snackBar: MatSnackBar) {}
  title: string = 'FundooNote';

  showInfo() {}

  ngOnInit(): void {}

  signOut() {
    this.route.navigate(['/login']);
    this.snackBar.open('User Sign out Sucessfully', '', {
      duration: 2000,
    });
    localStorage.clear();
  }
}
