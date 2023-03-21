import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { NoteState } from './notes.state';

export const selectDiary = (state: AppState) => state.notebook;

export const selectAllNotes = createSelector(
  selectDiary,
  (state: NoteState) => state.notes
);
