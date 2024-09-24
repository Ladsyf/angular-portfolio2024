import { Component } from '@angular/core';
import { NavigateOutsideButton } from '../../shared/base/navigate-outside-button';
import { personal } from '../../../variables/personal';

@Component({
  selector: 'app-linkedin-icon-button',
  templateUrl: './linkedin-icon-button.component.html',
  styleUrl: './linkedin-icon-button.component.css'
})
export class LinkedinIconButtonComponent extends NavigateOutsideButton {
  constructor() {
    super(personal.links.linkedin);
  }
}
