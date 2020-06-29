import { Injectable } from '@angular/core';
import { HttpService } from '../http.service/http.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private httpService: HttpService) {}
  addNote(note: Object) {
    return this.httpService.postAuth('notes/addNotes', note);
  }
  getNote() {
    return this.httpService.getAuth(`notes/getNotesList`);
  }
  pinNote(note) {
    return this.httpService.postAuth(`notes/pinUnpinNotes`, note);
  }
  unPinNote(note) {
    return this.httpService.postAuth(`notes/pinUnpinNotes`, note);
  }
  changeColor(note: Object) {
    return this.httpService.postAuth(`notes/changesColorNotes`, note);
  }
  archiveNote(note: Object) {
    return this.httpService.postAuth(`notes/archiveNotes`, note);
  }
  unArchiveNote(note: Object) {
    return this.httpService.postAuth(`notes/archiveNotes`, note);
  }
  deleteNote(note: Object) {
    return this.httpService.postAuth(`notes/trashNotes`, note);
  }
  getTrashNotes() {
    return this.httpService.getAuth(`notes/getTrashNotesList`);
  }
  restoreNote(note) {
    return this.httpService.postAuth(`notes/trashNotes`, note);
  }
  deleteNotePermanent(note) {
    return this.httpService.postAuth(`notes/deleteForeverNotes`, note);
  }
  updateNote(note) {
    return this.httpService.postAuth(`notes/updateNotes`, note);
  }
  addReminder(note) {
    return this.httpService.postAuth(`notes/addUpdateReminderNotes`, note);
  }
  deleteReminder(note) {
    return this.httpService.postAuth(`notes/removeReminderNotes`, note);
  }
  addLableToNote(note) {
    return this.httpService.postAuth(
      `noteLabels/${note.id}/updateNoteLabel`,
      note
    );
  }
  createLabel(note) {
    return this.httpService.postAuth(`noteLabels`, note);
  }
  addCollaborator(note) {
    console.log(note.id);

    return this.httpService.postAuth(
      `notes/${note.id}/AddcollaboratorsNotes`,
      note
    );
  }
  removeCollaborator(note) {
    return this.httpService.postAuth(
      `notes/${note.id}/removeCollaboratorsNotes`,
      note
    );
  }
}
