import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss'],
})
export class TrashComponent implements OnInit {
  constructor(private noteService: NoteService) {}
  trash: Array<any>;

  ngOnInit(): void {
    this.getTrashNotes();
  }

  getTrashNotes() {
    this.noteService.getTrashNotes().subscribe((res: any) => {
      let trashNotes = res.data.data.filter((element: any) => {
        return element.isDeleted === true;
      });
      this.trash = trashNotes;
    });
  }
}
