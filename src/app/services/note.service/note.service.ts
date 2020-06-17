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
}
