import { Injectable } from '@angular/core';
import { HttpService } from '../http.service/http.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private httpService: HttpService) {}
  addNote(note: Object) {
    return this.httpService.postNote('notes/addNotes', note);
  }
  getNote() {
    return this.httpService.getNotes(`notes/getNotesList`);
  }
  changeColor(note: Object) {
    return this.httpService.postNote(`notes/changesColorNotes`, note);
  }
  archiveNote(note: Object) {
    return this.httpService.postNote(`notes/archiveNotes`, note);
  }
  unArchiveNote(note: Object) {
    return this.httpService.postNote(`notes/archiveNotes`, note);
  }
  deleteNote(note: Object) {
    return this.httpService.postNote(`notes/trashNotes`, note);
  }
  getTrashNotes() {
    return this.httpService.getNotes(`notes/getTrashNotesList`);
  }
  restoreNote(note) {
    return this.httpService.postNote(`notes/trashNotes`, note);
  }
  deleteNotePermanent(note) {
    return this.httpService.postNote(`notes/deleteForeverNotes`, note);
  }
  updateNote(note) {
    return this.httpService.postNote(`notes/updateNotes`, note);
  }
  addReminder(note) {
    return this.httpService.postNote(`notes/addUpdateReminderNotes`, note);
  }
  deleteReminder(note) {
    return this.httpService.postNote(`notes/removeReminderNotes`, note);
  }
}
