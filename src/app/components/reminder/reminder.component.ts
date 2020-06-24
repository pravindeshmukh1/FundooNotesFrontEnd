import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service/note.service';
import { element } from 'protractor';
import { error } from 'console';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss'],
})
export class ReminderComponent implements OnInit {
  constructor(private noteService: NoteService) {}

  allReminderNote: Array<any>;
  ngOnInit(): void {
    this.getReminderNote();
  }
  getReminderNote() {
    this.noteService.getNote().subscribe(
      (res: any) => {
        let reminderNotes = res.data.data.filter((element: any) => {
          return element.reminder !== null && element.isDeleted === false;
        });
        this.allReminderNote = reminderNotes;
      },
      (err) => {
        console.log('Reminder Error', err);
      }
    );
  }
}
