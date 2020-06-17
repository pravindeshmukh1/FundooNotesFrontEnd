import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes: Array<any>;

  constructor(
    private noteService: NoteService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.noteService.getNote().subscribe(
      (res: any) => {
        this.notes = res.data.data.reverse();
      },
      (err) => {
        this.snackbar.open('server error', err);
      }
    );
  }
}
