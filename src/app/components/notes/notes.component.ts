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
  pined: Array<any>;
  notesLength: number;
  pinedLength: number;

  constructor(
    private noteService: NoteService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getNotes();
    this.getPinnedNotes();
  }

  getNotes() {
    this.noteService.getNote().subscribe(
      (res: any) => {
        let notes = res.data.data.filter((element: any) => {
          return (
            element.isArchived === false &&
            element.isDeleted === false &&
            element.isPined === false
          );
        });
        this.notes = notes;
        this.notes.reverse();
        this.notesLength = res.length;
      },
      (err) => {
        this.snackBar.open('Error occured at get note', '', {
          duration: 2000,
        });
      }
    );
  }
  getPinnedNotes() {
    this.noteService.getNote().subscribe(
      (res: any) => {
        let notes = res.data.data.filter((element: any) => {
          return (
            element.isPined === true &&
            element.isArchived === false &&
            element.isDeleted === false
          );
        });
        this.pined = notes;
        this.pined.reverse();
        this.pinedLength = res.length;
      },
      (err) => {
        this.snackBar.open('Error occured at get pin note', '', {
          duration: 2000,
        });
      }
    );
  }
}
