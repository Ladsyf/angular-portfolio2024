import { Component, Input } from '@angular/core';
import { IProject, IProjectParagraph } from '../../../variables/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent {
  @Input() record!: IProject;

  public convertToProjectParagraph(paragraph: IProjectParagraph | string): IProjectParagraph
  {
    return paragraph as IProjectParagraph;
  }
}
