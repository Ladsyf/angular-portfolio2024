import { experiences } from './../../../variables/experience';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.css'
})
export class ExperienceListComponent {
  public experiences = experiences;
}
