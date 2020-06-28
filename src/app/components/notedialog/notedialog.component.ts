import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/note.service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notedialog',
  templateUrl: './notedialog.component.html',
  styleUrls: ['./notedialog.component.scss'],
})
export class NotedialogComponent implements OnInit {
  title: string;
  description: string;
  isPined: boolean;

  constructor(
    public dialogRef: MatDialogRef<NotedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteService: NoteService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.title = this.data.note.title;
    this.description = this.data.note.description;
    this.isPined = this.data.note.pined;
  }
  pinNote() {
    let noteData = {
      noteIdList: this.data.note.id,
      isPined: true,
    };
    this.noteService.pinNote(noteData).subscribe(
      (res) => {
        this.snackBar.open('Pined note', '', {
          duration: 2000,
        });
      },
      (err) => {
        this.snackBar.open('Error occured Pin note', '', {
          duration: 2000,
        });
      }
    );
  }
  unPinNote() {
    let noteData = {
      noteIdList: this.data.note.id,
      isPined: false,
    };
    this.noteService.unPinNote(noteData).subscribe(
      (res) => {
        this.snackBar.open('UnPined note', '', {
          duration: 2000,
        });
      },
      (err) => {
        this.snackBar.open('Error occured UnPin note', '', {
          duration: 2000,
        });
      }
    );
  }
  close() {
    this.dialogRef.close({
      noteIdList: this.data.note.id,
      title: this.title,
      description: this.description,
    });
  }
}
