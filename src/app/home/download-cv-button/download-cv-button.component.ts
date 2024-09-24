import { Component } from '@angular/core';
import { NavigateOutsideButton } from '../../shared/base/navigate-outside-button';
import { personal } from '../../../variables/personal';

@Component({
  selector: 'app-download-cv-button',
  templateUrl: './download-cv-button.component.html',
  styleUrl: './download-cv-button.component.css'
})
export class DownloadCvButtonComponent extends NavigateOutsideButton {
  constructor() {
    super(personal.links.curriculumvitae);
  }
}
