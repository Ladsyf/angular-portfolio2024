import { Component, Input } from '@angular/core';
import { IExperience } from '../../../variables/experience';

@Component({
  selector: 'app-experience-record',
  templateUrl: './experience-record.component.html',
  styleUrl: './experience-record.component.css'
})
export class ExperienceRecordComponent {
  @Input() record!: IExperience
}
