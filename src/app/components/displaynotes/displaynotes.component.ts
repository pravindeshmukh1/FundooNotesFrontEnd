import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/note.service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { NotedialogComponent } from '../notedialog/notedialog.component';
import { CollaboratorComponent } from '../collaborator/collaborator.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss'],
})
export class DisplaynotesComponent implements OnInit {
  @Input() note: any;
  @Output() getNotes: EventEmitter<any> = new EventEmitter();

  @Output() pinNotes: EventEmitter<any> = new EventEmitter();

  pined: boolean = false;
  open: boolean = false;
  removable = true;

  constructor(
    private noteService: NoteService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

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
  pinNote() {
    let noteData = {
      noteIdList: [this.note.id],
      isPined: true,
      isArchived: this.note.isArchived === true ? false : this.note.isArchived,
    };
    this.noteService.pinNote(noteData).subscribe(
      (res) => {
        this.getNotes.emit();
        this.pinNotes.emit();
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
      noteIdList: [this.note.id],
      isPined: false,
    };
    this.noteService.unPinNote(noteData).subscribe(
      (res) => {
        this.getNotes.emit();
        this.pinNotes.emit();
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

  setReminder(data: Date) {
    let dateTime = data.toString();
    console.log('Date Time', dateTime);

    let reminder =
      dateTime.slice(4, 10) +
      ',' +
      dateTime.slice(11, 15) +
      ' ' +
      dateTime.slice(16, 25);
      
    let noteData = {
      noteIdList: [this.note.id],
      reminder: reminder,
    };
    this.noteService.addReminder(noteData).subscribe(
      (res) => {
        this.getNotes.emit();
        this.snackBar.open('Set Reminder', '', {
          duration: 2000,
        });
      },
      (err) => {
        this.snackBar.open('Error occured at set reminder note', '', {
          duration: 2000,
        });
      }
    );
  }
  deleteReminder() {
    let noteData = {
      noteIdList: [this.note.id],
    };
    this.noteService.deleteReminder(noteData).subscribe(
      (res) => {
        this.getNotes.emit();
        this.snackBar.open('Remove Reminder', '', {
          duration: 2000,
        });
      },
      (err) => {
        this.snackBar.open('Error occured at remove reminder note', '', {
          duration: 2000,
        });
      }
    );
  }

  addLableToNote(label: any) {
    let noteData = {
      userId: [this.note.id],
      label: label.label,
    };

    this.noteService.addLableToNote(noteData).subscribe(
      (res) => {
        this.getNotes.emit(label.label);
        this.snackBar.open('Remove Reminder', '', {
          duration: 2000,
        });
      },
      (err) => {
        this.snackBar.open('Error occured at remove reminder note', '', {
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
  openDialougeBox() {
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      data: {
        note: this.note,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {});
  }
}
