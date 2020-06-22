import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/note.service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { NotedialogComponent } from '../notedialog/notedialog.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss'],
})
export class DisplaynotesComponent implements OnInit {
  @Input() note: any;
  @Output() getNotes: EventEmitter<any> = new EventEmitter();

  pinned: boolean = false;
  open: boolean = false;

  constructor(
    private noteService: NoteService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  pinNote() {
    this.pinned = !this.pinned;
  }

  ngOnInit() {}

  setColor(color) {
    let noteData = {
      noteIdList: [this.note.id],
      color: color,
    };
    this.noteService.changeColor(noteData).subscribe(
      (res) => {
        this.getNotes.emit(color);
      },
      (err) => {
        this.snackBar.open('Error occured color note', '', {
          duration: 2000,
        });
      }
    );
  }

  setArchive() {
    let noteData = {
      noteIdList: [this.note.id],
      isArchived: true,
    };
    this.noteService.archiveNote(noteData).subscribe(
      (res) => {
        this.getNotes.emit();
        this.snackBar.open('Archive note', '', {
          duration: 2000,
        });
      },
      (err) => {
        this.snackBar.open('Error occured archive note', '', {
          duration: 2000,
        });
      }
    );
  }

  setUnArchive() {
    let noteData = {
      noteIdList: [this.note.id],
      isArchived: false,
    };
    this.noteService.unArchiveNote(noteData).subscribe(
      (res) => {
        this.getNotes.emit();
        this.snackBar.open('Un-Archive note', '', {
          duration: 2000,
        });
      },
      (err) => {
        this.snackBar.open('Error occured un-archive note', '', {
          duration: 2000,
        });
      }
    );
  }

  deleteNote() {
    let noteData = {
      noteIdList: [this.note.id],
      isDeleted: true,
    };
    this.noteService.deleteNote(noteData).subscribe(
      (res) => {
        this.getNotes.emit();
        this.snackBar.open('Delete note', 'Undo', {
          duration: 2000,
        });
      },
      (err) => {
        this.snackBar.open('Error occured delete note', '', {
          duration: 2000,
        });
      }
    );
  }
  deleteNotePermanent() {
    let noteData = {
      noteIdList: [this.note.id],
    };
    this.noteService.deleteNotePermanent(noteData).subscribe(
      (res) => {
        this.getNotes.emit();
        this.snackBar.open('Permanent delete note', '', {
          duration: 2000,
        });
      },
      (err) => {
        this.snackBar.open('Error occured permanent delete note', '', {
          duration: 2000,
        });
      }
    );
  }
  restoreNote() {
    let noteData = {
      noteIdList: [this.note.id],
      isDeleted: false,
    };
    this.noteService.restoreNote(noteData).subscribe(
      (res) => {
        this.getNotes.emit();
        this.snackBar.open('Restore note', '', {
          duration: 2000,
        });
      },
      (err) => {
        this.snackBar.open('Error occured restore note', '', {
          duration: 2000,
        });
      }
    );
  }
  openNoteDialog(): void {
    const dialogRef = this.dialog.open(NotedialogComponent, {
      data: { note: this.note },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        let noteData = {
          noteId: res.noteIdList,
          title: res.title,
          description: res.description,
          color: res.color,
        };
        this.noteService.updateNote(noteData).subscribe(
          (res) => {
            this.getNotes.emit();
          },
          (err) => {
            this.snackBar.open('Error occured update note', '', {
              duration: 2000,
            });
          }
        );
      }
    });
  }
}
