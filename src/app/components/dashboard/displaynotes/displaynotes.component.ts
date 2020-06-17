import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service/note.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss'],
})
export class DisplaynotesComponent implements OnInit {
  @Input() note: any;

  pinned: boolean = false;
  constructor(private noteService: NoteService) {}

  pinNote() {
    this.pinned = !this.pinned;
  }

  ngOnInit() {}

  setColor(color) {
    console.log('Color', color);
    let noteData = {
      id: this.note['id'],
      color: color,
    };
    this.noteService.changeColor(noteData).subscribe((res) => {
      console.log('setColor Respose', res);
    });
  }
}
