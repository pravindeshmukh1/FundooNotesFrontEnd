import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/note.service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent implements OnInit {
  pined: boolean = false;
  isPopUp: boolean = false;
  title: string = null;
  description: string;

  @Output() getNotes: EventEmitter<any> = new EventEmitter();

  noteArchive = {
    isArchived: false,
    isDeleted: false,
    isPined: false,
  };

  constructor(
    private noteService: NoteService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {}
  pinNote() {
    this.pined = !this.pined;
  }

  openCard() {
    this.isPopUp = !this.isPopUp;
  }

  onClose() {
    let note = {
      title: this.title,
      description: this.description,
      isPined: this.pined,
    };
    this.noteService.addNote(note).subscribe(
      (res: any) => {
        this.getNotes.emit();
        this.title = null;
        this.description = null;
        this.pined = false;
        this.snackBar.open('Note Added', '', {
          duration: 4000,
        });
      },
      (err) => {
        this.snackBar.open('Note Not Added', 'please try again', {
          duration: 4000,
        });
      }
    );
  }
}
