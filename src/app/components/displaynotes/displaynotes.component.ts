import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/note.service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss'],
})
export class DisplaynotesComponent implements OnInit {
  @Input() note: any;
  @Output() getNotes: EventEmitter<any> = new EventEmitter();

  pinned: boolean = false;
  constructor(
    private noteService: NoteService,
    private snackBar: MatSnackBar
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
    this.noteService.changeColor(noteData).subscribe((res) => {
      this.getNotes.emit(color);
    });
  }

  setArchive() {
    let noteData = {
      noteIdList: [this.note.id],
      isArchived: true,
    };
    this.noteService.archiveNote(noteData).subscribe((res) => {
      this.getNotes.emit();
      this.snackBar.open('Archive note', '', {
        duration: 2000,
      });
    });
  }

  setUnArchive() {
    let noteData = {
      noteIdList: [this.note.id],
      isArchived: false,
    };
    this.noteService.unArchiveNote(noteData).subscribe((res) => {
      this.getNotes.emit();
      this.snackBar.open('Un Archive note', '', {
        duration: 2000,
      });
    });
  }

  deleteNote() {
    let noteData = {
      noteIdList: [this.note.id],
      isDeleted: true,
    };
    this.noteService.deleteNote(noteData).subscribe((res) => {
      console.log('Delete Note', res);
      this.getNotes.emit();
    });
  }
  deleteNotePermanent() {
    let noteData = {
      noteIdList: [this.note.id],
    };
    this.noteService.deleteNotePermanent(noteData).subscribe((res) => {
      this.getNotes.emit();
    });
  }
  restoreNote() {
    let noteData = {
      noteIdList: [this.note.id],
      isDeleted: false,
    };
    this.noteService.restoreNote(noteData).subscribe((res) => {
      console.log('update note', res);

      this.getNotes.emit();
    });
  }
}
