import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/note.service/note.service';

@Component({
  selector: 'app-notedialog',
  templateUrl: './notedialog.component.html',
  styleUrls: ['./notedialog.component.scss'],
})
export class NotedialogComponent implements OnInit {
  title: string;
  description: string;

  constructor(
    public dialogRef: MatDialogRef<NotedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.title = this.data.note.title;
    this.description = this.data.note.description;
  }

  close() {
    this.dialogRef.close({
      noteIdList: this.data.note.id,
      title: this.title,
      description: this.description,
    });
  }
}
