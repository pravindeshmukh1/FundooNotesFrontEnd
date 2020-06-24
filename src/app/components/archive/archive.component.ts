import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {
  constructor(private noteService: NoteService) {}

  allArchiveNote: Array<any>;
  ngOnInit(): void {
    this.getArchiveNotes();
  }
  getArchiveNotes() {
    this.noteService.getNote().subscribe((res: any) => {
      let archiveNotes = res.data.data.filter((element: any) => {
        return element.isArchived === true && element.isDeleted === false;
      });
      this.allArchiveNote = archiveNotes;
    });
  }
}
