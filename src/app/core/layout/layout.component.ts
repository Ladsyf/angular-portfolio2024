import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { INavigationState } from '../store/navigation.state';
import { selectRoutePathValue } from '../store/navigation.selectors';
import { changeRoutePathValue } from '../store/navigation.actions';
import { getRoutePath, RoutePathValue } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  private currentRoutePathValue!: RoutePathValue;
  private isNavigationEnabled: boolean = true;

  private initialTouchYCoord = 0;
  private MAXIMUM_TOUCH_Y_COORD_DISTANCE = 30;

  constructor(private _store: Store<{ navigation: INavigationState }>, private _router: Router) {
    this._store.select("navigation").subscribe(x => {
      this.currentRoutePathValue = x.routePathValue;
    })
  }

  onTouchStart(e: TouchEvent)
  {
    this.initialTouchYCoord = e.touches[0].clientY;
  }

  onTouchMove(e: TouchEvent)
  {
    const currentTouchYCoord = e.touches[0].clientY;
    if (Math.abs(currentTouchYCoord - this.initialTouchYCoord) > this.MAXIMUM_TOUCH_Y_COORD_DISTANCE)
    {
      const isIncrement = this.initialTouchYCoord > currentTouchYCoord;
      this.navigateToNextPage(isIncrement);
    }
  }

  onTouchEnd(_: Event)
  {
    this.initialTouchYCoord = 0;
  }

  onMouseWheel(e: Event) {
    const isIncrement = (e as WheelEvent).deltaY > 0;
    this.navigateToNextPage(isIncrement);
  }

  navigateToNextPage(isIncrement: boolean) {
    if (!this.isNavigationEnabled) return;

    this.disabledNavigation();

    const nextPathValue = this.currentRoutePathValue + (isIncrement ? 1 : -1);
    const nextPath = getRoutePath(nextPathValue);

    if (nextPath == null) {
      this.enableNavigation()
      return;
    };

    this._router.navigate(['/' + nextPath]);

    this.enabledNavigationWithDelay();
  }

  disabledNavigation = () => this.isNavigationEnabled = false;
  enableNavigation = () => this.isNavigationEnabled = true;

  enabledNavigationWithDelay() {
    setTimeout(this.enableNavigation, 800);
  }
}
