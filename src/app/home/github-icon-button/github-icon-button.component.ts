import { Component } from '@angular/core';
import { personal } from '../../../variables/personal';
import { NavigateOutsideButton } from '../../shared/base/navigate-outside-button';

@Component({
  selector: 'app-github-icon-button',
  templateUrl: './github-icon-button.component.html',
  styleUrl: './github-icon-button.component.css'
})
export class GithubIconButtonComponent extends NavigateOutsideButton {
  constructor() {
    super(personal.links.github);
  }
}
