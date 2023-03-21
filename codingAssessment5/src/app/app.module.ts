import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { ListNoteComponent } from './components/list-note/list-note.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { NoteReducer } from './store/notes/notes.reducer';

@NgModule({
  declarations: [AppComponent,AddNoteComponent,
    ListNoteComponent,
    UpdateNoteComponent,],
  imports: [BrowserModule, AppRoutingModule, AmplifyAuthenticatorModule,ReactiveFormsModule,
    StoreModule.forRoot({ notebook: NoteReducer }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Notes App',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
