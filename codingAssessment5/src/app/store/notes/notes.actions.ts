import { createAction, props } from '@ngrx/store';
import {Note} from '../../services/note.service'

export const addNoteAction = createAction('ADD_NOTE', props<{ note: Note }>());
export const deleteNoteAction = createAction('DELETE_NOTE', props<{ id: string }>());
export const updateNoteAction = createAction('UPDATE_NOTE', props<{ note: Note }>());
