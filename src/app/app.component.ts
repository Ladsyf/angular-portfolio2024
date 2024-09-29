import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChildrenOutletContexts, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { personal } from '../variables/personal';
import { CoreModule } from './core/core.module';
import { changeRoutePathValue } from './core/store/navigation.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CoreModule,
    LetDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(titleService: Title, private _router: Router, _store: Store, private contexts: ChildrenOutletContexts) {
    titleService.setTitle(personal.fullName);
    this.setFavicon(personal.links.logo);
    this._router.events.subscribe(x => {
      if (x instanceof NavigationStart) {
        const path = x.url.replace("/", "");
        _store.dispatch(changeRoutePathValue({ path }))
      }
    });
  }

  setFavicon(iconUrl: string): void {
    const head = document.querySelector('head');
    let existingLink = head?.querySelector('link[rel="icon"]');

    if (existingLink) {
      existingLink.setAttribute('href', iconUrl);
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = iconUrl;
      head?.appendChild(newLink);
    }
  }
}
