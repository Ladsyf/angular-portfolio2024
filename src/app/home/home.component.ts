import { Component } from '@angular/core';
import { pageAnimationTransition } from '../app.common.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [pageAnimationTransition]
})

export class HomeComponent {
}
