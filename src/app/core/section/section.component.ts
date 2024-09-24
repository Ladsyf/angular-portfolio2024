import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INavigationState } from '../store/navigation.state';
import { backgroundSlideTrigger } from './section.animations';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
  animations: [backgroundSlideTrigger]
})

export class SectionComponent {
  public navigation$!: Observable<INavigationState>;

  constructor(_store: Store<{ navigation: INavigationState }>) {
    this.navigation$ = _store.select("navigation");
  }
}
