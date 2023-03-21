import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentBehaviourService {
  showAdd$ = new BehaviorSubject<boolean>(false);
  showUpdate$ = new BehaviorSubject<boolean>(false);
  successStream$ = new BehaviorSubject<String | null>(null);
  errorStream$ = new BehaviorSubject<String | null>(null);
  noteId$ = new BehaviorSubject<string>('');
  constructor() {}
}
