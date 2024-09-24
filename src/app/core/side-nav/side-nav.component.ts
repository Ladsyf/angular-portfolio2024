import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { routePaths } from '../../app.routes';
import { toggle } from '../store/navigation.actions';
import { INavigationState } from '../store/navigation.state';
import { toggleTrigger } from './side-nav.animations';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
  animations: [...toggleTrigger]
})
export class SideNavComponent {
  public navigation$!: Observable<INavigationState>;

  constructor(private _store: Store<{ navigation: INavigationState }>) {
    this.navigation$ = _store.select('navigation');
  }

  public menus = routePaths;

  public closeNav()
  {
    this._store.dispatch(toggle());
  }
}
