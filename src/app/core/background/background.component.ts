import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRouteInfo } from '../../app.routes';
import { INavigationState } from '../store/navigation.state';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})

export class BackgroundComponent implements AfterViewInit {
  @ViewChild('backgroundContainer', { read: ViewContainerRef })
  backgroundContainer!: ViewContainerRef;

  constructor(private _store: Store<{ navigation: INavigationState }>) { }

  ngAfterViewInit() {
    const navigation$ = this._store.select("navigation");

    navigation$.subscribe(x => {
      const routeInfo = getRouteInfo(y => y.value === x.routePathValue);
      this.backgroundContainer.clear();
      this.backgroundContainer.createComponent(routeInfo.background);
    });
  }
}
