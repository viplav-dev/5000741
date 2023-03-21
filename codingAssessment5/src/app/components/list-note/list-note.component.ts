import { Component } from '@angular/core';
import { NoteService, Note } from 'src/app/services/note.service';

import { Store } from '@ngrx/store';
import { selectAllNotes } from 'src/app/store/notes/notes.selectors';
import { AppState } from 'src/app/app.state';
import { ComponentBehaviourService } from 'src/app/services/component-behaviour.service';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css'],
})
export class ListNoteComponent {
  storeNotes!: Note[];
  notes!: Note[];
  noteId$!: string;
  totalNotesFound!: number;

  constructor(
    private service: NoteService,
    private componentService: ComponentBehaviourService,
    private store: Store<AppState>
  ) {
    this.store.select(selectAllNotes).subscribe((data) => {
      this.storeNotes = this.notes = data;
    });
  }

  async onSearch(search: string) {
    search = search.trim();
    console.log(search);

    if (!search) {
      this.notes = this.storeNotes;
      this.totalNotesFound = 0;
      console.log('empty');
    } else {
      this.service
        .SearchNotes({ title: { matchPhrasePrefix: search } })
        .then((data) => {
          this.notes = data.items as Note[];
          this.totalNotesFound = data.total!;
        });
    }
  }
  ondeleteNote(id: string) {
    this.service.DeleteNote({ id: id }).then((data) => {
      if (id === this.noteId$) {
        this.componentService.showUpdate$.next(false);
      }
    });
  }

  showAddNote() {
    this.componentService.showAdd$.next(true);
    this.componentService.showUpdate$.next(false);
  }
  showUpdateNote(id: string) {
    this.componentService.showAdd$.next(false);
    this.componentService.showUpdate$.next(true);
    this.componentService.noteId$.next(id);
  }
}
