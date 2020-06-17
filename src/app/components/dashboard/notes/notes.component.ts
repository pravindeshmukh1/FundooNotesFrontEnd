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
    console.log('no In It');
    this.getNotes();
    console.log('no In It - done');
  }

  getNotes() {
    this.noteService.getNote().subscribe(
      (res: any) => {
        this.notes = res.data.data.reverse();
        console.log('note Array', this.notes);

        // console.log('note-Response', res.data.data);
        console.log('======', typeof res.data.data);

        console.log('this note', typeof this.notes);
        this.snackbar.open('Note Display', '', {
          duration: 1000,
        });
      },
      (err) => {
        this.snackbar.open('server error', err);
      }
    );
  }
}
