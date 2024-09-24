import { animate, query, sequence, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggle } from '../store/navigation.actions';
import { INavigationState } from '../store/navigation.state';
import { toggleTrigger } from './hamburger.animations';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.css',
  animations: [...toggleTrigger]
})
export class HamburgerComponent {
  public navigation$!: Observable<INavigationState>;

  constructor(private _store: Store<{ navigation: INavigationState }>) {
    this.navigation$ = _store.select('navigation');
  }

  public toggle() {
    this._store.dispatch(toggle())
  }

}
