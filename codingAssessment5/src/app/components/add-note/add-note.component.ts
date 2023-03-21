import { Component } from '@angular/core';
import { NoteService, Note } from 'src/app/services/note.service';

import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { addNoteAction } from 'src/app/store/notes/notes.actions';
import { ComponentBehaviourService } from 'src/app/services/component-behaviour.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent {
  notes: Note[] = [];
  public addNote: FormGroup;
  constructor(
    private NoteService: NoteService,
    private componentService: ComponentBehaviourService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.addNote = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public onAddNote(singleNote: Note) {
    this.NoteService.CreateNote(singleNote).then((data) => {
      this.componentService.showAdd$.next(false);
    });
  }
  hideAddComponent() {
    this.componentService.showAdd$.next(false);
  }
}
