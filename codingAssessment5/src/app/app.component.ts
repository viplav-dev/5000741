import { Component, OnInit } from '@angular/core';
import { NoteService, Note } from './services/note.service';
import { ZenObservable } from 'zen-observable-ts';
import {
  addNoteAction,
  deleteNoteAction,
  updateNoteAction,
} from './store/notes/notes.actions';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { ComponentBehaviourService } from './services/component-behaviour.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Notes App';
  showAdd: boolean = false;
  showUpdate: boolean = false;
  private listNoteSubscription: ZenObservable.Subscription | null = null;
  private updateNoteSubscription: ZenObservable.Subscription | null = null;
  private deleteNoteSubscription: ZenObservable.Subscription | null = null;

  async ngOnInit() {
    this.listNoteSubscription =
      this.NoteService.OnCreateNoteListener().subscribe((event: any) => {
        this.store.dispatch(
          addNoteAction({ note: event.value.data.onCreateNote })
        );
      });

    this.deleteNoteSubscription =
      this.NoteService.OnDeleteNoteListener().subscribe((event: any) => {
        this.store.dispatch(
          deleteNoteAction({ id: event.value.data.onDeleteNote['id'] })
        );
      });
    this.updateNoteSubscription =
      this.NoteService.OnUpdateNoteListener().subscribe((event: any) => {
        this.store.dispatch(
          updateNoteAction({ note: event.value.data.onUpdateNote })
        );
      });
  }

  constructor(
    private NoteService: NoteService,
    private store: Store<AppState>,
    private componentService: ComponentBehaviourService
  ) {
    // Subscribe to the showAdd$ and showUpdate$ observables
    this.componentService.showAdd$.subscribe((bool) => (this.showAdd = bool));
    this.componentService.showUpdate$.subscribe((bool) => {
      this.showUpdate = bool;
      console.log(this.showUpdate);
    });

    //Subscribe to all the notes and add them to the store
    this.NoteService.ListNotes().then((data) => {
      data.items.forEach((note) => {
        this.store.dispatch(addNoteAction({ note: note! }));
      });
      if (data) {
        this.componentService.successStream$.next('Notes loaded successully');
      }
    });

    // Subscribe to the error and success streams for displaying messages in the UI
    this.componentService.errorStream$.subscribe((data) => console.log(data));
    this.componentService.successStream$.subscribe((data) => console.log(data));
  }
}
