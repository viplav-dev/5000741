import { Component } from '@angular/core';
import { NoteService, Note } from 'src/app/services/note.service';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { selectAllNotes } from 'src/app/store/notes/notes.selectors';

import { updateNoteAction } from 'src/app/store/notes/notes.actions';
import { ComponentBehaviourService } from 'src/app/services/component-behaviour.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css'],
})
export class UpdateNoteComponent {
  singleNote!: Note;
  public updateForm: FormGroup;

  constructor(
    private service: NoteService,
    private componentService: ComponentBehaviourService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.componentService.noteId$.subscribe((id) => {
      this.store.select(selectAllNotes).subscribe((notes) => {
        this.singleNote = notes.filter((note) => note.id === id)[0];
        this.updateForm.patchValue({
          title: this.singleNote.title,
          description: this.singleNote.description,
        });
      });
    });
  }

  hideUpdateComponent() {
    this.componentService.showUpdate$.next(false);
  }
  async onUpdate(note: Note) {
    this.componentService.showUpdate$.next(false);
    note = { ...note, id: this.singleNote.id };
    this.service.UpdateNote(note).then((result) => {
      console.log(result);
      
    });
  }
}
