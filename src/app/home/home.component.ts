import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INavigationState } from '../core/store/navigation.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('enter', [
      transition(':enter',
        [
          // query(".background", [
          //   style({ position: 'relative', top: '-100%' }),
          //   animate(".2s ease", style({ top: 0 }))
          // ]),
          query('h2, h1, p, button',
            [style({ opacity: 0, scale: 0 }),
            stagger('.2s', animate('.2s ease')),
            ]
          )
        ]
      ),
      transition(':leave',
        [
          query('h2, h1, p, button',
            [style({ opacity: "*", scale: "*" }),
            stagger('.1s', animate('.1s ease', style({ opacity: 0, scale: 0 }))),
            ]
          ),
          // query(".background", [
          //   style({ position: 'relative', top: 0 }),
          //   animate(".2s ease", style({ top: '-100%' }))
          // ])
        ]
      ),
    ]),
  ]
})

export class HomeComponent {
}
