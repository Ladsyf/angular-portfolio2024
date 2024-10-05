import { Component } from '@angular/core';
import { pageAnimationTransition } from '../app.common.animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [pageAnimationTransition]
})
export class ProjectsComponent {

}
