import { Component, Input } from '@angular/core';
import { IProject } from '../../../variables/project';

@Component({
  selector: 'app-project-record',
  templateUrl: './project-record.component.html',
  styleUrl: './project-record.component.css'
})
export class ProjectRecordComponent {
  @Input() record!: IProject
}
