import { Component } from '@angular/core';
import { pageAnimationTransition } from '../app.common.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [pageAnimationTransition]
})
export class AboutComponent {

}
