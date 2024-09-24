import { Component } from '@angular/core';
import { personal } from '../../../variables/personal';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
})

export class IntroductionComponent {
  public personalInfo = personal;
}
