import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/note.service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent implements OnInit {
  pinned: boolean = false;
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
    this.pinned = !this.pinned;
  }

  openCard() {
    this.isPopUp = !this.isPopUp;
  }

  onClose() {
    let node = {
      title: this.title,
      description: this.description,
    };
    this.noteService.addNote(node).subscribe(
      (res: any) => {
        this.getNotes.emit();
        this.title = null;
        this.description = null;
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
